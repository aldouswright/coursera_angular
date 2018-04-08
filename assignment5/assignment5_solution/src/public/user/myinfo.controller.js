(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["SignupService","ApiPath"];
function MyInfoController(SignupService, ApiPath) {
  var $ctrl = this;
  var userData = SignupService.getUserData();
  if(userData == null){
  	$ctrl.currentUser = null;
  }else{
  	$ctrl.currentUser = userData;
  	$ctrl.currentUser.imgUrl = ApiPath + "/images/" + $ctrl.currentUser.shortname + ".jpg";
  }
}
})();
