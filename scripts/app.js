(function(){
	"use strict"
	var app = angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);
	
	console.log("Hello");

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService, $scope){
		var list1 = this;
		list1.items = ShoppingListCheckOffService.getCartItems();
		list1.buyItem = function(idx){
			ShoppingListCheckOffService.buyItem(idx);
		};
	};

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService, $scope){
		var list2 = this;
		list2.items = ShoppingListCheckOffService.getBoughtItems();
		list2.cartItems = ShoppingListCheckOffService.getCartItems();
	};

	function ShoppingListCheckOffService(){
		var service = this;
		var cartItems = [
			{"name": "macarons",
			 "quantity": 20
			},
			{"name": "beouf souffle",
			 "quantity": 5
			},
			{"name": "ratatouille",
			 "quantity": 15
			},
			{"name": "escargot",
			 "quantity": 5
			},
			{"name": "froid poulette",
			 "quantity": 5
			}
		];
		var boughtItems = [];

		service.buyItem = function(index){
			var toRemove = cartItems[index];
			boughtItems.push(toRemove);
			cartItems.splice(index, 1);
			if(cartItems.length == 0){
				hasItems = false;
			}
		};

		service.getCartItems = function(){
			return cartItems;
		};

		service.getBoughtItems = function(){
			return boughtItems;
		};
	}
})();