(function functionName() {
  angular.module("LunchCheck", [])
         .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope){
      $scope.processLunch = function(){
        var input = $scope.input;
        var output;
        var outputStyle;

        if (input == null || input === "" || input.trim() === "") {
          output = "Please enter data first";
          outputStyle = "error";
        }else{
          var lunchArray = input.split(",").filter(function(element){
            return element.trim() !== "";
          });
          if (lunchArray.length <= 3) {
            output = "Enjoy!";
          }else{
            output = "Too much!";
          }
          outputStyle = "success";
        }

        $scope.output = output;
        $scope.outputStyle = outputStyle;

        console.log(outputStyle)
      };
    }
})();
