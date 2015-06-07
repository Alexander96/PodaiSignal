/**
 * Created by Freezyy on 6/6/2015.
 */

//Display the 'extra' city bar on event.
$("#city-reg").on('change', function(){
    if($("#city-reg").val() == 0){
        $("#other-city-reg-wrap").css({display: "block"})
    }
    else {
        $("#other-city-reg-wrap").css({display: "none"})
    }
});

// Validates the form.
$(document).ready(function () {

    $('#info-reg').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 12
            },
            middlename: {
                required: true,
                minlength: 3,
                maxlength: 12
            },
            lastname: {
                required: true,
                minlength: 3,
                maxlength: 12
            },
            username: {
                required: true,
                minlength: 4,
                maxlength: 12

            },
            password: {
                required: true,
                minlength: 4,
                maxlength: 12

            },
            passwordverify: {
                required: true,
                minlength: 4,
                maxlength: 12
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            city: {
                required: true

            },
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        invalidHandler: function() {
            $('#reg-error').popup('open');
        }
    });
});

//Register function
function register() {
    var username = $("#user-reg").val();
    var firstName = $("#name-reg").val();
    var middleName = $("#middlename-reg").val();
    var lastName = $("#lastname-reg").val();
    var password = $("#pass-reg").val();
    var verifypasswrod = $("#pass-verify-reg").val();
    var phone = $("#phone-reg").val();
    var email = $("#email-reg").val();

    if ($("#city-reg").val() == 0) {
        town = $("#other-city-reg").val();
    }
    else {
        town = $("#city-reg").val();
    }

    if (password !== verifypasswrod) {
        alert();
    }

    $.ajax({
        type: "POST",
        url: domain + "/api/users",
        data: {
            username: username, firstName: firstName, middleName: middleName,
            lastName: lastName, phone: phone, email: email
        },
        success: function (user) {
            alert("raboti");
            $.mobile.changePage( "#home", { transition: "slide" });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR);
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }

    });
}


//username: {type: String, require: '{PATH} is required', unique: true},
//firstName: {type: String, require: '{PATH} is required'},
//middleName: {type: String, require: '{PATH} is required'},
//lastName: {type: String, require: '{PATH} is required'},
//phone: String,
//    email: String,
//    town: String