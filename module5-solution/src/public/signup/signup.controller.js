(function(){
  'use strict'
  angular.module("public")
  .controller("SignUpController", SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService){
    var signupCtrl = this;
    clearError();
    clearSuccess();

    signupCtrl.submit = function(shortName){
      clearError();
      MenuService.getMenuItem(shortName)
      .then(function successCallback(response) {
        SignUpService.store(signupCtrl.signup, response.data);
        signupCtrl.stored = "Your information has been saved";
        clearError();
      }, function errorCallback(response) {
        clearSuccess();
        signupCtrl.favError = "No such menu number exists"
      });

    };

    signupCtrl.favoriteHasError = function(){
      return signupCtrl.favError !== null && signupCtrl.favError !== undefined;
    };

    signupCtrl.isFavoriteStored = function(){
      return signupCtrl.stored !== null && signupCtrl.stored !== undefined;
    };

    function clearError(){
      signupCtrl.favError = null
    }

    function clearSuccess(){
      signupCtrl.stored = null
    }


  }
})();
