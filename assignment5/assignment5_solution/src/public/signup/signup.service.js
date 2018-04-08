(function(){
"use strict";

angular.module("public")
.service("SignupService", SignupService);


SignupService.$inject = ["$http", "ApiPath"];

function SignupService($http, ApiPath){
  var service = this;
  service.users = [];

  service.getShortNames = function(){
      return $http.get(ApiPath + "menu_items.json").then(function(r){
        return r.data;
      });
  };

  service.saveValue = function(user){
    service.users.push(user);
  };

  service.getUserData = function(){
    if(service.users.length == 0){
      return null;
    }else{
      return service.users[service.users.length - 1];
    }
  };

  service.checkShortName = function(s){
    return $http.get(ApiPath + "/menu_items/" +s+ ".json");
  };

}
})();
