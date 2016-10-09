(function () {
'use strict';

angular.module('data')
      .service('MenuDataService', MenuDataService);

      MenuDataService.$inject = ['$http'];
      function MenuDataService($http){
        var service = this;

        service.getAllCategories = function(){
          var config = {
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/categories.json'
          };
          var promise = $http(config).then(function (result) {
            var categories = result.data;
            return categories;
          });
          return promise;
        };

        service.getItemsForCategory = function(categoryShortName){
          var config = {
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
            params: {category: categoryShortName}
          };
          var promise = $http(config).then(function (result) {
            var items = result.data.menu_items;
            return items;
          });
          return promise;
        };
      }

})();
