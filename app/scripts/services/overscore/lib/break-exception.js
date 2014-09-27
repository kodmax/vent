define([], function() {
	'use strict';

	var BreakException = function (event) {
		this.getEvent = function () {
			return event;
		};
	};
	
	return BreakException;
});