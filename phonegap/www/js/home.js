/**
 * Created by Freezyy on 6/7/2015.
 */

function loadHome(id, d) {
    var template = '';
    for(var i=0;i<d.length;i++){

        divClass = '';

        template += '<div class="last-signals">';
        //template += '<p><img src="' + domain + d[i].url + '" height="250px" width="250px"></img></p>';
        template += '<p>'+ d[i].description + '</p>';
        template += '<p>'+ d[i].user.firstName + ' ' + d[i].user.lastName +'</p>';
        template += '<p>' + d[i].date + '</p>';
        template += '<p>Status: ' + d[i].status + '</p>';
        template += '</div>';

    }
    $("#get-home").html(template);

}


function getHome(){

    $.mobile.loading( "show", {
        theme: "",
        html: "<span class='ui-icon'><img src='img/loading.gif' /></span>"
    });
    $.ajax({
        url: domain + '/last-signals',
        type: 'GET',
        error : function (){ document.title='error'; $.mobile.loading("hide"); },
        success: function (data) {
            if(data){
                allSignals = data;
                console.log("-----Signals-----");
                console.log(allSignals);
                loadHome(null, allSignals);
                $.mobile.loading('hide');
            }
        }
    });
}
$(document).delegate('#home', 'pageshow', getHome);