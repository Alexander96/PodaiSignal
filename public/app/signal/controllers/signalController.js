app.controller("SignalController", function($scope, SignalService, identity, notifier, $location){
	var data,
		contentType,
		photo = {};

	$scope.identity = identity;
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = dd+'/'+mm+'/'+yyyy;
	$scope.uploadPhoto = function(){
		var result = $scope.signal.photo;
		data = result.slice(result.indexOf(",") +1, result.length);
      	contentType = result.slice(result.indexOf(":") + 1, result.indexOf(";base64"));
      	photo = {
      		data: data,
      		contentType: contentType
      	}
      	console.log(contentType);
      	console.log(data);
	}
	$scope.sendSignal = function(signal){
		if($scope.identity.currentUser){
			signal.user={};
			signal.user.firstName = $scope.identity.currentUser.firstName;
			signal.user.middleName = $scope.identity.currentUser.middleName;
			signal.user.lastName = $scope.identity.currentUser.lastName;
			signal.user.phone = $scope.identity.currentUser.phone;
			signal.user.email = $scope.identity.currentUser.email;
		}
		signal.photo = photo;
		signal.date = today;
		console.log(signal);
		SignalService.postSignal(signal).then(function(response){
			console.log("resonse: " + response);
			notifier.success('Успешно изпратено!');
			$location.path("/all-signals");
		})
	}
});