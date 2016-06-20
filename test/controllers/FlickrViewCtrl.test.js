'use strict';

describe('FlickrViewCtrl tests', function () {
	var mock, $q, $controller;

	beforeEach(function () {
    module('flickularApp');

		inject(function ($rootScope, flickrAPI, _$q_, _$controller_) {
			$q = _$q_;
			$controller = _$controller_;

			mock = {
				$scope: $rootScope.$new(),
        $routeParams: { }, // set this in tests
				flickrAPI: flickrAPI
			};
		});
    
	});

	it('controller should call refresh() on init', function () {
		spyOn(mock.flickrAPI, 'search').andReturn($q.defer().promise);

		// init controller 
    // console.log($controller('FlickerViewCtrl'));
		$controller('FlickrViewCtrl', { $scope: {} });

		expect(mock.flickrAPI.search).toHaveBeenCalled();
	});

	it('flickerAPI.refresh() should set $scope.entry', function() {
		// Prepare flickrAPI MOCK object - return promise on search() call
    var deferred = $q.defer();
		spyOn(mock.flickrAPI, "search").andReturn(deferred.promise);

		// init controller
    mock.$routeParams = { index: 2 };
		$controller('FlickrViewCtrl', mock);
      
		// Resolve the the promise with results
		deferred.resolve({ items: [1, 2, 3] });
		mock.$scope.$digest();

		expect(mock.flickrAPI.search).toHaveBeenCalled();
		expect(mock.$scope.entry).toEqual(3);
	});

});
