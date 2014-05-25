'use strict';

angular.module('flickularApp')

.factory('flickrAPI', ['$q', '$http', 'flickrURL', function($q, $http, flickrURL) {
    return new function() {

        this.search = function() {
            var deferred = $q.defer();

            $http.jsonp(flickrURL).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject([data,status,headers,config]);
                });

            return deferred.promise;
        }

    };
}]);