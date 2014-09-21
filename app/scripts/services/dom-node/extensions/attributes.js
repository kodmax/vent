/* global define */
define(['each'], function(each) {
	'use strict';
	
	var attributes = function (node, options) {
		each(options.attributes, function (value, name) {
			node.setAttribute(name, value);
		});
	};
	
	return attributes;
});