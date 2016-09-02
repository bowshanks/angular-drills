//
angular.module('apiApp').service('service',function($http,$q){

  this.getData = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://swapi.co/api/starships/'
    }).then(function(response){
      if (response.status === 200){
        var myData = response.data;

      }
      else {
        var myData = 'error getting data'
      }

      deferred.resolve(myData)
    })

    return deferred.promise
  }

});
