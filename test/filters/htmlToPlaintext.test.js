'use strict';

describe('Filters: htmlToPlaintext', function() {

    beforeEach(module('flickularApp'));

    it('htmlToPlaintext: basic html should return pure text', inject(function($rootScope, $filter) {
        var html = $filter('htmlToPlaintext');
        expect( html('<span>Testing</span>')).toBe('Testing');
        expect(1).toBe(1);
    }));

    it('htmlToPlaintext: scripts should be converted to pure text', inject(function($rootScope, $filter) {
        var html = $filter('htmlToPlaintext');
        expect( html('<script>alert("ok");</script>')).toBe('alert("ok");');
        expect(1).toBe(1);
    }));

    it('htmlToPlaintext: normal text should remain unchanged', inject(function($rootScope, $filter) {
        var html = $filter('htmlToPlaintext');
        expect( html('testing')).toBe('testing');
        expect(1).toBe(1);
    }));

});