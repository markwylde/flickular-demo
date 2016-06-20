'use strict';

describe('FlickrListCtrl tests', function () {
	var mock, $q, $controller;

	beforeEach(function () {
		module('flickularApp');

		inject(function ($rootScope, flickrAPI, _$q_, _$controller_) {
			$q = _$q_;
			$controller = _$controller_;

			mock = {
				$scope: $rootScope.$new(),
				flickrAPI: flickrAPI
			};
		});
	});

	it('should call refresh() on ctrl init', function () {
		spyOn(mock.flickrAPI, 'search').andReturn($q.defer().promise);

		// init controller 
		$controller('FlickrListCtrl', mock);

		expect(mock.flickrAPI.search).toHaveBeenCalled();
	});

	it('flickerAPI.refresh() should set $scope.entries on ctrl init', function() {
		// Prepare flickrAPI MOCK object - return promise on search() call
		var deferred = $q.defer();
		spyOn(mock.flickrAPI, "search").andReturn(deferred.promise);

		// init controller 
		$controller('FlickrListCtrl', mock);

		// Resolve the the promise with results
		deferred.resolve({ items: [1, 2, 3] });
		mock.$scope.$digest();

		expect(mock.flickrAPI.search).toHaveBeenCalled();
		expect(mock.$scope.entries).toEqual([1,2,3]);
	});

});
