//This controlloer will retrive the information form fira base.
timeSyncApp.controller('getTime', ['$scope','$rootScope','$routeParams', '$firebase', '$location' ,function($scope, $rootScope, $routeParams, $firebase, $location){
	var url = 'https://sms-demo-julian.firebaseio.com/timedata/'+$routeParams.id;
  var ref = new Firebase(url);
	data = $firebase(ref);
  $scope.timedata = data.$asObject();

  if ($scope.timedata.$value != null ){
     // to take an action after the data loads, use the $loaded() promise
    $scope.timedata.$loaded().then(function() {
        console.log("loaded record:", $scope.timedata);

       // To iterate the key/value pairs of the object, use `angular.forEach()`
       angular.forEach($scope.timedata, function(value, key) {
          console.log(key, value);
       });
     });

     // To make the data available in the DOM, assign it to $scope
     $scope.data = $scope.timedata;

     // For three-way data bindings, bind it to the scope instead
     // $scope.timedata.$bindTo($scope, "data");

     $scope.delete = function(){
      data.$remove().then(function(ref) {
        console.log("loaded record:", $scope.timedata.$id, $scope.timedata.timeNum);
        $location.path('/')
        }, function(error) {
          console.log("Error:", error);
        });
     };
  }else{
    console.log("NOTHING EXISTS HERE.");
    $location.path('/')
  };

}]);