define([], function() {
	'use strict';

	var patternRegexp = function (pattern) {
		return new RegExp('^' + pattern.replace(/:[\w-]+/g, '([\\w-]+)') + '$');
	};

	return patternRegexp;
});