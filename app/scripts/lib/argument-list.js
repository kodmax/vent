define([], function() {
	'use strict';

	var argList = function (args) {
		var argList = [];
		
		for (var i = 0; i < args.length; i++) {
			argList.push(args [i]);
		}
		
		return argList;
	}
	
	return argList;
});