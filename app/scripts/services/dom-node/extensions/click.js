/* global define */
define([], function() {
	'use strict';
	
	var click = function (node, options) {
		if (typeof options.click === 'function') {
			node.addEventListener('click', options.click, false);
		}
	};
	
	return click;
});