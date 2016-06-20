'use strict';

describe('flickerAPI service tests', function () {
  var flickrAPI, flickrURL, httpBackend;

	beforeEach(function () {
		module('flickularApp');

		inject(function (_flickrAPI_, _flickrURL_, $httpBackend) {
      flickrAPI = _flickrAPI_;
      flickrURL = _flickrURL_;
      httpBackend = $httpBackend;
		});
	});

  afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
   });

	it('should make a JSONP request to flickerURL', function () {
    expect(typeof flickrURL).toEqual('string');

    httpBackend.expectJSONP(flickrURL).respond([]);

    flickrAPI.search();
	});

});
