//
angular.module('arrayApp').controller('arrayController',function($scope,arrayService){

  $scope.test = 'working'

  $scope.getData = function() {
    arrayService.getData().then(function(response){
      $scope.myData = response;
    })
  }

  $scope.getData();
});
