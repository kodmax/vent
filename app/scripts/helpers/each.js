/* global define */
define([], function() {
	'use strict';
	
	var each = function (target, f) {
		if (typeof target === 'object') {
			Object.keys(target).forEach (function (key) {
				f.call(target, target [key], key);
			});
		}
	};
	
	return each;
});