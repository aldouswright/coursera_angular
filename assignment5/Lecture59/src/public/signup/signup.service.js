(function(){
	

angular.module("common")
.service("SignupService", SignupService);


SignupService.$inject = ["$http", "ApiPath"];

function MenuService($http, ApiPath){
  var service = this;
  service.users = [];

  service.getShortNames = function(){
      return $http.get(ApiPath + "menu_items.json").then(function(r){
        return r.data;
      });
  };


  service.saveValue = function(user){
    service.users.push[users];
    console.log(service.users);
  };

  service.getUser = function(id){
    for(int i = 0; i<service.users.length; i++){
      if(service.users[i].id == id){
        return service.users[i];
      }
    }
    return null;
  }
}
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}


});