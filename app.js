(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.name = 'list comma separated dishes you usually have for lunchs';
	$scope.message = '';
	$scope.check = function (){
	 var nametocheck = $scope.name.trim();
	 var messagetoshow = $scope.message;
	 if (nametocheck) {
	 var word = nametocheck.split(',');
	 
	 var i;
	 var n=0;
	 for (i = 0; i < word.length; i++){
		 if (word[i].trim()){
			 n=n+1;
		 } else { n=n+0;}
		 
	 }
	 
	 console.log(n);
	 
	 
	 if  (n == 0){
		messagetoshow = 'Please enter data first';
	} else if  (n == 3 || n < 3 ) {
		messagetoshow = 'Enjoy!';
	 } else if (n > 3){
		 messagetoshow = 'Too much!';
	 }
	 }
	 else {
		messagetoshow = 'Please enter data first';
	}
	 console.log(messagetoshow);
	    
	$scope.message =  messagetoshow;
		
	};
	
	
	
	
}


})();