angular.module('apiApp').controller('apiController',function($scope,apiService){
  $scope.getData = function(){
    apiService.getData().then(function(response){
      $scope.birds = response
    })
  }

  $scope.getData();
});
