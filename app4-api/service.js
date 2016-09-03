angular.module('apiApp').service('service',function($q,$http){

  this.getBirds = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://bird-api.com/api/birds'
    }).then(function(response){
      console.log(response);
      deferred.resolve(response.data);
    });

    return deferred.promise;
  }

});
