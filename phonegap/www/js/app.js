/**
 * Created by Freezyy on 6/6/2015.
 */
var domain = "http://podaisignal.herokuapp.com";

var isLogged = false;

var loggedUser = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
};

var allSignals;

var doneSignals;

$(function () {
    $("[data-role=panel]").panel().enhanceWithin();
    $("[data-role=panel]").find("a").addClass("ui-btn");
});
