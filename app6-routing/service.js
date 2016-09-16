angular.module('app').service('service',function($q,$http){

  this.getData = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(response){
      deferred.resolve(response.data.results);
    })

    return deferred.promise;
  }


});
