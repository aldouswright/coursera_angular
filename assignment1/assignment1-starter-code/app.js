(function(){
	"use strict";
	var app = angular.module("checkiftoomuch",[]);
	
	app.controller("checkFoodAmt", ["$scope", function($scope){
		$scope.input = "";
		$scope.message = "";
		$scope.showMessage = function(){
			var foodListLength = $scope.input.split(",");
			if(foodListLength == 0)
			{
				$scope.message = "Please enter data first";
			}
			else if(foodList <= 3)
			{
				$scope.message = "Enjoy";
			}
			else
			{	
				$scope.message = "Too Much";
			}
		};
	}]);
})();
