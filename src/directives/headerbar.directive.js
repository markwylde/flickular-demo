'use strict';

angular.module('flickularApp')

.directive('flkaHeaderBar', function() {
    return {
        restrict: 'E',
        scope: {
            selected: '@selected'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/headerbar/headerbar.html'
    }
});