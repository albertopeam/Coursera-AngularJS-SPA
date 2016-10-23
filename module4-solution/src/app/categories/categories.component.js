(function () {
'use strict';

angular.module('MenuApp')
  .component("categories", {
    /*
    best option to avoid use another template!!!
    template: '<categories list="ctrl.categories"></categories>',
    */
    template:
    templateUrl: 'src/app/categories/categories.template.html',
    bindings: {
      categories: '<'
    },
    controller: CategoriesComponentController
  });

CategoriesComponentController.$inject = ['$rootScope']
function CategoriesComponentController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log("event start");
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log("event success");
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("event error: ", error);
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

};
})();
