define(['./request'], function(Request) {
	'use strict';

	var DataAccessLayer = function (options) {
		
		this.request = function (resources, success) {
			return new Request(resources).success(success);
		};
		
	};
	
	return DataAccessLayer;
});