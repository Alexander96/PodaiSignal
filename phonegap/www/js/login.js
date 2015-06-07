/**
 * Created by Freezyy on 6/6/2015.
 */


function login(){
    username = $("#user").val();
    pass = $("#pass").val();

    $.ajax({
        type: "POST",
        url: domain + "/login",
        data: {username: username, password: pass },
        success: function(user){
            if(user.success) {
                loggedUser = {
                    firstName: user.user.firstName,
                    lastName: user.user.lastName,
                    phone: user.user.phone,
                    email: user.user.email
                };
                isLogged = true;
                $.mobile.changePage( "#home", { transition: "slide" });
            }
            else {
                $('#loginpop').popup();
                setTimeout(function(){
                    $('#loginpop').popup('open');
                },100);
            }
        },
        error: function(){
        }

    });

    return false;
}