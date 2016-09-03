angular.module('apiApp').service('apiService',function($q,$http) {

  this.getData = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://bird-api.com/api/birds'
    }).then(function(response){
      deferred.resolve(response.data);
    })

    return deferred.promise;

  }

})
