define(['./adapters', './formatters'], function(adapters, formatters) {
	'use strict';

	function init () {
		adapters();
		formatters();
	};
	
	return init;
});