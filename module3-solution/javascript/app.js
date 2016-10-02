(function(){
  'use strict';
  angular.module("NarrowItDownApp",[])
         .controller("NarrowItDownController", NarrowItDownController)
         .service("MenuSearchService", MenuSearchService)
         .directive("foundItems", FoundItemsDirective);

  /*
    Controller
  */
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var controller = this;

    controller.search = function(searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function success(result){
        controller.found = result;
      }).catch(function error(error){
        console.log("Error: ", error);
      });
    };
    controller.remove = function(index){
      controller.found.splice(index, 1);
    };

  }

  /*
    Service
  */
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var config = {
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      };
      var promise = $http(config).then(function (result) {
        var items = result.data.menu_items;
        var founded = new Array();
        for(var i=0;i<items.length;i++){
          var item = items[i];
          if (item.description.includes(searchTerm) && searchTerm !== "") {
            founded.push(item);
          }
        }
        return founded;
      });
      return promise;
    };
  }

  /*
    Directive
  */
  function FoundItemsDirective(){
     var ddo = {
       templateUrl:'foundItems.html',
       scope: {
         found: '<',
         onRemove: '&'
       },
       controller: NarrowItDownController,
       controllerAs: 'controller',
       bindToController: true
     };
     return ddo;
  }

})();
