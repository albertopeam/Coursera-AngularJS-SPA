(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  service.user = null;
  service.store = function(user, item){
    service.user = {
      "name": user.name,
      "lastname": user.lastname,
      "email": user.email,
      "phone": user.phone,
      "favorite": item
    };
  };

  service.read = function(){
    return service.user;
  };
  
  service.isSigned = function(){
    return service.user !== null;
  };
}



})();
