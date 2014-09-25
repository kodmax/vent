define([], function() {
	'use strict';

	var ControllerContext = function (hash, params, eventBus) {
		
		this.getHash = function () {
			return hash;
		};
		
		this.on = eventBus.on;
	};
	
	return ControllerContext;
});