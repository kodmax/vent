define(['./adapters', './formatters'], function(adapters, formatters) {
	'use strict';

	var init = function () {
		adapters();
		formatters();
	};
	
	return init;
});