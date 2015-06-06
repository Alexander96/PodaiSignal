app.controller("AllSingalsController", function($scope, SignalService){
	SignalService.getAllSignals().then(function(data){
		console.log(data);
	})

});