(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://jhu-ng-a5sol.herokuapp.com')
.config(config);



config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
