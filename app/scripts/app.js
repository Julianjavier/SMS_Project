//This variable is use to set up our routes for midification
var timeSyncApp = angular.module('timeSyncApp', ["timer", "ngRoute", "firebase"]);

//This is our main route provider.
timeSyncApp.config(['$routeProvider', function($routeProvider){
	//this will be our landing page
	$routeProvider.when('/', {
		
		templateUrl:'view/form.html',
		controller:'timeInputs'
	//this will be our timer page where we pull infomation form the database.
	}).when('/getTime/:id', {
		
		templateUrl:'view/timer.html',
		controller:'getTime',
	
	});

}]);