angular.module('app').controller('homeCtrl',function($scope,service){
  $scope.routeName = "home";

  $scope.getData = function(){
    service.getData().then(function(response){
      $scope.people = response;
    })
  }

  $scope.getData();

});
