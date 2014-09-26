define(['./request', './event-bus'], function(Request, EventBus) {
	'use strict';

	var DataAccessLayer = function (options) {
		var vent = new EventBus();
		var driversByName = {};
		var drivers = [];
		
		this.resource = function (Driver) {
			var driver = new Driver(vent);
			
			var name = driver.describe().name;
			if (typeof name === 'string') {
				driversByName [name] = driver;
				
			} else if (name instanceof Array) {
				for (var i = 0; i < name.length; i++) {
					driversByName [name [i]] = driver;
				}
			}
			
			drivers.push(driver);
		};
		
		this.request = function (resources, success) {
			var resourceNames = Object.keys(resources);
			var tasks = [];
			for (var i = 0; i < resourceNames.length; i++) {
				var name = resourceNames [i];
				tasks.push({ driver: driversByName [name], query: resources [name]});
			}
			
			return new Request(tasks).success(success);
		};
		
		this.getDriver = function (name) {
			return driversByName [name];
		};
	};
	
	return DataAccessLayer;
});