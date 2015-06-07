'use strict'
app.controller('MainController', function($scope, identity, SignalService){
	SignalService.lastSignals().then(function(signals){
		$scope.lastSignals = signals;
		console.log(signals);
	})
});