angular.module('app').controller('controller',function($scope,service){

  $scope.getData =  function(){
    service.getData().then(function(response){
      $scope.myData = response;
    })
  }

  $scope.getData();

})
