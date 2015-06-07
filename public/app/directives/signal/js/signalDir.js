app.directive("newDog", function(){
	return{
		restrict: "AE",
		templateUrl: "partials/directives/signal/signal",
		controller: 'SignalDirController',
        scope: {
            status: '=status'
        }
	}
})