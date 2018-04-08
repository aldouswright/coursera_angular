(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ["SignupService"];
function SignUpController(SignupService) {
  var $ctrl = this;

  $ctrl.submit = function() {
  	SignupService.saveValue($ctrl.user);
  };
  //$ctrl.menuCategories = menuCategories;
}


})();
