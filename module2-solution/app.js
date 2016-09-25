(function() {
  'use strict';
  angular.module("ShoppingListCheckOff",[])
          .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
          .controller("ToBuyShoppingController", ToBuyShoppingController)
          .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService){
      var buyController = this;
      buyController.buyItems = ShoppingListCheckOffService.getBuyItems();

      buyController.buy = function(index){
        ShoppingListCheckOffService.buy(index);
      };

      buyController.isEmpty = function(){
        return buyController.buyItems.length == 0;
      };
    }


    AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
      var boughtController = this;
      boughtController.boughtItems = ShoppingListCheckOffService.getBoughtItems();

      boughtController.isEmpty = function(){
        return boughtController.boughtItems.length == 0;
      };
    }


    function ShoppingListCheckOffService(){
      var service = this;

      var buy = [{name: "Pepsi", quantity:"1"},
                 {name: "Cookies", quantity:"1"},
                 {name: "Chips", quantity:"1"},
                 {name: "Chocolate", quantity:"1"},
                 {name: "Milk", quantity:"1"}];
      var bought = [];

      service.getBuyItems = function(){
        return buy;
      };

      service.getBoughtItems = function(){
        return bought;
      };

      service.buy = function(index){
        var value = buy[index];
        bought.push(value);
        buy.splice(index, 1);
      };
    }

})();
