(function(){
	var app = angular.module("LunchCheck",[]);

	function checkLunchFood($scope)
	{
		$scope.input = "";
		$scope.message = "";
		$scope.showMessage = function(){
			var foodList = $scope.input;
			if(foodList == "")
			{
				$scope.message = "Please enter data first";
			}
			else
			{
				var foodListLength = foodList.split(",").length;
				if(foodListLength <= 3)
				{
					$scope.message = "Enjoy";
				}
				else
				{	
					$scope.message = "Too Much";
				}
			}
		};
	}
	checkLunchFood.$inject = ["$scope"];
	app.controller("LunchCheckController", checkLunchFood);
})();