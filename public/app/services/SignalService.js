app.factory("SignalService", function($http, $q, identity){
	function getAllSignals(){
		var defer = $q.defer();

		$http.get("/allsignals")
		.success(function(data){
			defer.resolve(data);
		})
		.error(function(data){
			console.log(data);
			defer.reject();
		})

		return defer.promise;
	}
	function getAllSignalsStatus(){

	}
	function getSignalById(){

	}
	function postSignal(signal){
		var defer = $q.defer();

		$http.post("/signal", signal)
		.success(function(data){
			defer.resolve(data);
		})
		.error(function(data){
			console.log(data);
			defer.reject();
		})

		return defer.promise;

	}
	return {
		getAllSignals: getAllSignals,
		getAllSignalsStatus: getAllSignalsStatus,
		getSignalById: getSignalById,
		postSignal: postSignal
	}
})