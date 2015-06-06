/**
 * Created by Freezyy on 6/5/2015.
 */

var domain = "http://podaisignal.herokuapp.com";
domain = "http://localhost:1234";
//url: domain + "/login"

function login(){
    username = $("#user").val();
    pass = $("#pass").val();
	console.log("user: " + username);
	console.log("pass: " + pass);

    $.ajax({
        type: "POST",
        url: domain + "/login",
        data: {username: username, password: pass },
        success: function(user){
			console.log(user);
            $.mobile.changePage( "#page2", { transition: "slide" });
        },
        error: function(){
            $('#a').popup();
            setTimeout(function(){
                $('#a').popup('open');
            },100);
        }



    });


    return false;
}