define(['./pattern-regexp'], function(patternRegexp) {
	'use strict';

	/**
	 * @class app-router.HashMatcher
	 * @param {Array} collections of patterns {pattern, controller}. Pattern may be a string (Backbone style) or a regex.
	 */
	var HashMatcher = function (routes) {
		
		
		/**
		 * Matches hash agains the patterns. Returns the matched route's controller.
		 * @method app-router.HashMatcher#match
		 * @returns controller
		 */
		this.match = function (hash) {
			hash = (hash + '').replace(/^#/, '');
			
			for (var i = 0; i < routes.length; i++) {
				var route = routes [i];
				
				if (!(route.pattern instanceof RegExp)) {
					route.pattern = patternRegexp(route.pattern);
				}
				
				var match = route.pattern.exec(hash);
				if (match) {
					return { params: match, controller: route.controller };
				}
			}
		};
	};
	
	return HashMatcher;
});