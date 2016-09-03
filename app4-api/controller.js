angular.module('apiApp').controller('controller',function($scope,service){
  $scope.getBirds = function() {
    service.getBirds().then(function(response){
      $scope.birds = response;

    })
  }

  $scope.getBirds();
});
