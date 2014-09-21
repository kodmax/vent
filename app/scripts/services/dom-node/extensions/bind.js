/* global define */
define(['each'], function(each) {
	'use strict';
	
	var bind = function (node, options) {
		each(options.bind, function (callback, eventName) {
			node.addEventListener(eventName, callback, false);
		});
	};
	
	return bind;
});