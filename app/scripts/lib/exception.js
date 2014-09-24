define([], function() {
	'use strict';

	var Exception = function (msg) {
		this.toString = function () {
			return msg + '';
		};
	}
	
	return Exception;
});