app.controller("AllSingalsController", function($scope, SignalService, MapService, $location){
	SignalService.getAllSignals().then(function(data){
		console.log(data);
		$scope.signals = data;
	});
	$scope.viewMap = function(s){
		var coords = {
			lat: s.place.lat,
			lng: s.place.lng
		}
		MapService.coords = coords;

		$location.path("/map");
	}
	

});