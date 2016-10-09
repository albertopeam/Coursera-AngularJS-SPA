(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/app/home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/app/categories/allcategories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{categoryName}',
    templateUrl: 'src/app/items/allitems.template.html',
    controller: 'ItemsController as itemsController',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        var categoryName = $stateParams.categoryName;
        return MenuDataService.getItemsForCategory(categoryName);
      }]
    }
  });
}

})();
