define(['services/app-router/pattern-regexp'], function(patternRegexp) {
	'use strict';

	describe('Testing AppRouter/pattern-regexp', function () {
		
		it('Should convert trivial pattern "foo"', function () {
			assert.equal(patternRegexp('foo'), '/^foo$/');
		});
		
		it('Should converting pattern with param "foo/:id"', function () {
			assert.equal(patternRegexp('#foo/:id'), '/^foo\/([\\w-]+)$/');
		});
		
		it('Match test for converting pattern with param"foo/:id"', function () {
			var match = patternRegexp('#foo/:id').exec('foo/123');
			assert.equal(match [0], 'foo/123');
			assert.equal(match [1], '123');
		});
		
		it('Match test for converting pattern with params "foo/:id/:other"', function () {
			var match = patternRegexp('foo/:id/:other').exec('foo/123/abc');
			assert.equal(match [0], 'foo/123/abc');
			assert.equal(match [1], '123');
			assert.equal(match [2], 'abc');
		});
	});
});