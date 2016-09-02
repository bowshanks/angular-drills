//
angular.module('apiApp').controller('controller',function($scope,service){

  $scope.getData = function(){
    service.getData().then(function(response){
      
      $scope.starships = response.results;

    });
  }
  $scope.getData();
});
