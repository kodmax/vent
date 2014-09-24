/* global define */
define([], function() {
	'use strict';
	
	var parent = function (node, options) {
		if (options.parent) {
			options.parent.appendChild(node);
		}
	};
	
	return parent;
});