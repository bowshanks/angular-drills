angular.module('app').controller('controller',function($scope,service){
  $scope.test="working";

  $scope.getData = function(){
    service.getData().then(function(response){
      $scope.people = response;
    })
  }

  $scope.getData();

})
