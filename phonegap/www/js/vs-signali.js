/**
 * Created by Freezyy on 6/6/2015.
 */

var signalType = 'all';

$("#signal-select").on('change', function(){
   signalType =  $("#signal-select").val();
    getSignals();
});

function loadSignals(id, d) {
    var template = '';
    for(var i=0;i<d.length;i++){
        if(d[i].status == signalType || signalType == 'all') {
            divClass = '';

            if(d[i].status == 'pending') {
                divClass = 'signal-p'
            }
            else if(d[i].status == 'done') {
                divClass = 'signal-c'
            }
            else {
                divClass = 'signal-i'
            }

            template += '<div class="'+ divClass +'">';
            template += '<p><img src="' + domain + d[i].url + '" height="250px" width="250px"></img></p>';
            template += '<p>'+ d[i].description + '</p>';
            template += '<p>'+ d[i].user.firstName + ' ' + d[i].user.lastName +'</p>';
            template += '<p>' + d[i].date + '</p>';
            template += '<p>Status: ' + d[i].status + '</p>';
            template += '</div>';
        }
    }
    $("#signali").html(template);

}


function getSignals(){
    $.mobile.loading("show");
    $.ajax({
        url: domain + '/allsignals',
        type: 'GET',
        error : function (){ document.title='error'; $.mobile.loading("hide"); },
        success: function (data) {
            if(data){
                allSignals = data;
                console.log("-----Signals-----");
                console.log(allSignals);
                loadSignals(null, allSignals);
                $.mobile.loading("hide");
            }
        }
    });
}
$(document).delegate('#vs-signali', 'pageshow', getSignals);