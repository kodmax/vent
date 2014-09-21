/* global define */
define(['each'], function(each) {
	'use strict';
	
	var classes = function (node, options) {
		if (options.classes) {
			node.className = options.classes;
		}
	};
	
	return classes;
});