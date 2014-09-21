/* global define */
define(['./parent', './attributes', './click', './bind', './classes'], function(parent, attributes, click, bind, classes) {
	'use strict';
	
	var extensions = function (node, options) {
		click(node, options);
		bind(node, options);
		attributes(node, options);
		classes(node, options);
		parent(node, options);
	};
	
	return extensions;
});