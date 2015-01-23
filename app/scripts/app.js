var timeSyncApp = angular.module('timeSyncApp', ["timer", "ngRoute", "firebase"]);

timeSyncApp.config(['$routeProvider', function($routeProvider){
	
	$routeProvider.when('/', {
		
		templateUrl:'view/form.html',
		controller:'timeInputs'
	
	}).when('/getTime/:id', {
		
		templateUrl:'view/timer.html',
		controller:'getTime',
	
	});

}]);