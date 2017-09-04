(function(){
	"use strict"
	var narrowItDownApp = angular.module("NarrowItDownApp", [])
		.controller("NarrowItDownController", narrowItDownController)
		.directive("foundItems", FoundItemsDirective)
		.service("MenuSearchService", menuSearchService);

	menuSearchService.$inject = ['$http'];		
	function menuSearchService($http){
		var service = this;
		var url = 'https://davids-restaurant.herokuapp.com/menu_items.json';
		service.getMatchedMenuItems = function(term){
			var matchedItems = [];
			$http.get(url).then(function successFunction(response){
				var items = response.data["menu_items"];
				for (var idx in items){
					var d = items[idx]["description"];
					console.log("item");
					console.log(items[idx])
					console.log("indexOf");
					console.log(d.indexOf(term))
					if (d.indexOf(term) != -1){
						matchedItems.push(items[idx]);
					}
				}
			},function errorFunction(response){});
			return matchedItems;
		};
	};

	narrowItDownController.$inject = ["MenuSearchService"];	
	function narrowItDownController(MenuSearchService){
		var controller = this;
		controller.found = null;
		controller.search_term = "";
		controller.update_items = function(){
			console.log(controller.search_term);
			controller.found = MenuSearchService.getMatchedMenuItems(controller.search_term);
		},

		controller.removeItem = function(idx){
			controller.found.splice(idx, 1);
		}
	};

	
	function FoundItemsDirective(){
		var ddo = {
			templateUrl: 'showFoundItems.html',
			scope:{
				items: '<',
				onRemove: '&'
			},
			controller: narrowItDownController,
			controllerAs: 'narrowItDownList',
			bindToController: true
		};
		return ddo;
	};
	
})();
