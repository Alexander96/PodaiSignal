/**
 * Created by Freezyy on 6/6/2015.
 */

function autoFill() {
    if(loggedUser == null || loggedUser.firstName == '') {
        $("#hide-menu").css({display: "none"});
        $("#hide-logout").css({display: "none"});
    }
    else {
        $('#name').val(loggedUser.firstName);
        $('#lastname').val(loggedUser.lastName);
        $('#phone').val(loggedUser.phone);
        $('#email').val(loggedUser.email);
        $("#hide-menu").css({display: "inline-block"});
        $("#hide-logout").css({display: "inline-block"});
    }
}
function submitSignal(mode) {
    if(mode == 'guest') {
        $('#hide-menu').css({display: none});
        logout();
    }
    firstName = $("#name").val();
    lastName = $("#lastname").val();
    description = $("#description").val();
    phone = $("#phone").val();
    email = $("#emial").val();

    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = dd+'/'+mm+'/'+yyyy;
    today = today.toString();

    $.ajax({
        type: "POST",
        url: domain + "/signal",
        data: {user: {firstName: firstName, lastName: lastName, phone: phone}, description: description, date: today},
        success: function() {
        },
        error: function() {
        }
    });
    return false;
}
