/**
 * Created by Freezyy on 6/6/2015.
 */

var uu = window.localStorage.getItem("user");
if(user!=null && user != undefined && user != "" && user){
    loggedUser = JSON.parse(uu);
}
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
                window.localStorage.setItem("user", JSON.stringify(user.user));
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

function logout() {
    loggedUser = {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    };
    window.localStorage.setItem('user', null);
    $.mobile.changePage( "#login", { transition: "slide" });
    return false;
}