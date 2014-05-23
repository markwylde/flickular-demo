'use strict';

angular.module('flickularApp')

    .controller('FlickrListCtrl', function($scope, flickrAPI) {

        $scope.entries = [];

        $scope.refresh = function() {
            flickrAPI.search().then( function(data) {
                $scope.entries = data.items;
            });
        };

        $scope.refresh();

    })

    .controller('FlickrViewCtrl', function($scope, $routeParams, flickrAPI) {

        $scope.refresh = function() {
            flickrAPI.search().then( function(data) {
                $scope.entry = data.items[$routeParams.index];
            });
        };

        $scope.refresh();

    });