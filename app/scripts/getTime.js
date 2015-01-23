//This controlloer will retrive the information form fira base.
timeSyncApp.controller('getTime', ['$scope','$rootScope','$routeParams', '$firebase' ,function($scope, $rootScope, $routeParams, $firebase){
	var url = 'https://sms-demo-julian.firebaseio.com/timedata/'+$routeParams.id;
	var ref = new Firebase(url);
	$scope.timedata = $firebase(ref).$asObject();

     // to take an action after the data loads, use the $loaded() promise
    $scope.timedata.$loaded().then(function() {
        console.log("loaded record:", $scope.timedata.$id, $scope.timedata.timeNum);

       // To iterate the key/value pairs of the object, use `angular.forEach()`
       angular.forEach($scope.timedata, function(value, key) {
          console.log(key, value);
       });
     });

     // To make the data available in the DOM, assign it to $scope
     $scope.data = $scope.timedata;

     // For three-way data bindings, bind it to the scope instead
     $scope.timedata.$bindTo($scope, "data");
}]);