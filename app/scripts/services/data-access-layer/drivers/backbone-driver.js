define([], function() {
	'use strict';

	var BackboneDriver = function (name, model) {
		
		
		var Driver = function (vent) {
			
			var pool = {};
			
			this.create = function (entity) {
				
			};
			
			this.getById = function (id, success, fail) {
				
			};

			this.update = function (entity, success, fail) {
				
			};
			
			this.destroy = function (entity, success, fail) {
				
			};
			
			this.query = function (query, success, fail) {
				
			};
			
			this.describe = function () {
				return { name: name };			
			};
		};
		

		return Driver;
	};
	
	return BackboneDriver;
});
