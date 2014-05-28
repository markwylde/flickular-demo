'use strict';

angular.module('flickularApp')

.directive('flkaListEntry', function() {
    return {
        restrict: 'E',
        scope: {
            entryIndex: '@',
            postTitle: '@',
            published: '@',
            author: '@',
            authorId: '@',
            thumb: '@',
            flickrLink: '@'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/listentry/listentry.html'
    }
});