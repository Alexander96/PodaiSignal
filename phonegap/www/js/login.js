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
            //$('#a').popup();
            //setTimeout(function(){
            //    $('#a').popup('open');
            //},100);
        }

    });

    return false;
}