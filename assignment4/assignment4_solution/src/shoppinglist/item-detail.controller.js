(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ["MenuDataService", "c_items"];
function ItemDetailController(MenuDataService, c_items) {
  var itemDetail = this;
  itemDetail.items = c_items.data.menu_items;
  
}

})();
