define([], function() {
	'use strict';

	var standardNotFoundController = function () {
		var msg = 'AppRouter: route ' + this.getHash() + ' not found';
		
		this.on('navin', function () {
			if (console.warn) {
				console.warn(msg);
				
			} else {
				console.log (msg);
			}			
		});
	};
	
	return standardNotFoundController;
});