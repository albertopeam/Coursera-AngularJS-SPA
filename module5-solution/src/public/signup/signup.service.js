(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  service.user = null;
  service.store = function(user, item){
    service.user = user;
    service.user.favorite = item;
  };
  service.read = function(){
    return service.user;
  };
  service.isSigned = function(){
    return service.user !== null;
  };
}



})();
