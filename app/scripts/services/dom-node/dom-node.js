/* global define */
define(['services/dom-node/extensions/extensions'], function(extensions) {
	'use strict';
	
	var createDOMNode = function(tagName, options) {
		var node = document.createElement(tagName);
		
		if (typeof options === 'object') {
			extensions(node, options);
		}
		
		return node;
	};
	
	return createDOMNode;
});