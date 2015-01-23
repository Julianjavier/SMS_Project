///This will take in the inputs and clean them if nessesary.
timeSyncApp.controller('timeInputs', ['$scope','$rootScope','$location', '$firebase' ,function($scope, $rootScope, $location, $firebase){
	$scope.submit = function() {
        if ($scope.newTime.hours || $scope.newTime.minutes || $scope.newTime.seconds) {
			
			//this is the information for firabase connection
			var url = 'https://sms-demo-julian.firebaseio.com/timedata';
			var ref = new Firebase(url);
			$scope.timedata = $firebase(ref).$asArray();

        	///These will be used to make sure variables are safe to use.
        	if($scope.newTime.hours == undefined){
        		$scope.newTime.hours = 00	
        	}if($scope.newTime.minutes == undefined){
        		$scope.newTime.minutes = 00	
        	}if($scope.newTime.seconds == undefined){
        		$scope.newTime.seconds = 00	
        	};
	        
	        ///This is a prototype add hours to my UTC	
	        Date.prototype.addHours= function(h){
			    this.setHours(this.getHours()+h);
			    return this;
			}
			///This is a prototype add minutes to my UTC
			Date.prototype.addMinutes= function(m){
			    this.setMinutes(this.getMinutes()+m);
			    return this;
			}
			///This is a prototype add seconds to my UTC
			Date.prototype.addSeconds= function(s){
			    this.setSeconds(this.getSeconds()+s);
			    return this;
			}

		var timeNow = new Date().addHours($scope.newTime.hours).addMinutes($scope.newTime.minutes).addSeconds($scope.newTime.seconds).getTime();
		console.log($scope.newTime.hours);
		console.log($scope.newTime.minutes);
		console.log($scope.newTime.seconds);
		console.log(timeNow);
		
		//This section will handle sending information to the database will returning the object id at the same time, as well as routing.
		$scope.timedata.$add({timeNum : timeNow}).then(function(ref){
			$scope.id = ref.key();
			$location.path('/getTime/'+ $scope.id);
		});
		$scope.newTime = {};
    	}
    };
}]);