angular.module('arrayApp').controller('arrayController',function($scope,arrayService){

  $scope.getData = function(){
    arrayService.getData().then(function(response){
      $scope.myData = response;
    })
  }

  $scope.getData();
})
