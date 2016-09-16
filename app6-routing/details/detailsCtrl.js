angular.module('app').controller('detailsCtrl',function($scope,$state,service){
  $scope.detailsName = $state.params.name

  $scope.getData = function(){
    service.getData().then(function(response){
      var people = response;

      for(var i = 0; i < people.length; i++){
        if(people[i]["name"] === $scope.detailsName){
          $scope.person = people[i];
        }
      }
    })
  }

  $scope.getData();



});
