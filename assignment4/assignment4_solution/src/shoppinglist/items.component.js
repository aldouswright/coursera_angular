(function () {
'use strict';

angular.module('MenuApp')
.component('item', {
  templateUrl: 'src/shoppinglist/templates/item.template.html',
  bindings: {
    items: '<'
  }
});

})();
