define(['./each'], function(each) {
	'use strict';

	var register = function (target) {
		target.each = each;
	};
	
	return register;
});