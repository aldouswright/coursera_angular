(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant("CategoryURL", "https://davids-restaurant.herokuapp.com/categories.json")
.constant("CategoryItemsURL", "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ["$http", "CategoryURL", "CategoryItemsURL"];
function MenuDataService($http, CategoryURL, CategoryItemsURL) {
  var service = this;
  service.getAllCategories = function() {
    var h = $http({
      method: "GET",
      url: CategoryURL
    });
    return h;
  };

  service.getItemsForCategory = function(categoryShortName){
    return $http({
        method: "GET",
        url: CategoryItemsURL + categoryShortName
      });
    }
  };
})();

