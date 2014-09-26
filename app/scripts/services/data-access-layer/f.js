define(['services/data-access-layer/data-access-layer'], function(DataAccessLayer) {
	'use strict';

	var rest = new DataAccessLayer();
	
	var f = function (resources, success) {
		if (arguments.length === 0) {
			return rest;
			
		} else if (arguments.length === 1) {
			return rest.getResource(resources);
			
		} else if (arguments.length === 2) {
			return rest.request(resources, success);
			
		} else {
			return 'come again?';
		}
	};
	
	return f;
});