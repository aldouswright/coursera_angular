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
				console.log(response);
				var items = response.data["menu_items"];
				for (var idx in items){
					if (term.indexOf(items[idx]["description"]) != -1){
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
			console.log("search_term: " + controller.search_term)
			controller.found = MenuSearchService.getMatchedMenuItems(controller.search_term);
			console.log(controller.found);

		}

	};

	
	function FoundItemsDirective(){
		var ddo = {
			templateUrl: 'showFoundItems.html',
			scope:{
				found: '<'
			},
			//ontroller: narrowItDownController,
			//controllerAs: 'narrowItDownList',
			//bindToController: true
		};
		return ddo;
	};
	
})();
