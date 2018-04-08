(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ["SignupService"];
function SignUpController(SignupService) {
  var $ctrl = this;
  $ctrl.valid_shortname = true;
  $ctrl.completed = false;

  $ctrl.submit = function() {
  	var r = SignupService.checkShortName($ctrl.user.shortname);
  	r.then(function(r){
        $ctrl.completed = true;
        $ctrl.valid_shortname = true;
        $ctrl.user.title = r.data.name;
        $ctrl.user.description = r.data.description;
        SignupService.saveValue($ctrl.user);
      },
      function(r){
        $ctrl.valid_shortname = false;
      });
  };
}
})();
