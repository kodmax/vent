define([], function() {
	'use strict';

	var patternRegexp = function (pattern) {
		return new RegExp('^' + pattern.replace(/^#/, '').replace(/:[\w-]+/g, '([\\w-]+)') + '$');
	};

	return patternRegexp;
});