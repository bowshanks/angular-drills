angular.module('arrayApp').controller('arrayController',function($scope,service){
  $scope.test ="working"

  $scope.getData = function(){
    service.getData().then(function(response){
      $scope.myData = response;
    })
  }

  $scope.getData();


});
