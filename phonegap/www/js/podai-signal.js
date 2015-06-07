/**
 * Created by Freezyy on 6/6/2015.
 */


function submitSignal() {
    firstName = $("#name").val();
    lastName = $("#lastname").val();
    description = $("#description").val();
    phone = $("#phone").val();
    picture = img;

    var today = new Date();
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

    var data = picture.slice(picture.indexOf(",") +1, picture.length);
    var contentType = picture.slice(picture.indexOf(":") + 1, picture.indexOf(";base64"));
    console.log(img);
    //
    //$.ajax({
    //    type: "POST",
    //    url: domain + "/signal",
    //    data: {user: {firstName: firstName, lastName: lastName, phone: phone}, description: description, photo: {data: data, ContentType: contentType}},
    //    success: function() {
    //        alert("Boom!");
    //    },
    //    error: function() {
    //        alert("false");
    //    }
    //});
    return false;
}



//data = result.slice(result.indexOf(",") +1, result.length);
//contentType = result.slice(result.indexOf(":") + 1, result.indexOf(";base64"));