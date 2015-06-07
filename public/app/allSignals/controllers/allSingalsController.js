app.controller("AllSingalsController", function($scope, SignalService, MapService, $location){
	SignalService.getAllSignals().then(function(data){
		console.log(data);
		$scope.signals = data;
	});
	$scope.viewMap = function(i){
		var coords = {
			lat: $scope.signals[i].place.lat,
			lng: $scope.signals[i].place.lng
		}
		MapService.coords = coords;

		$location.path("/map");
	}
	

});