define(['./request', 'vent'], function(Request, EventBus) {
	'use strict';

	var DataAccessLayer = function (options) {
		var vent = new EventBus();
		var driversByName = {};
		var drivers = [];
		var inst = this;
		
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
				
				if (typeof resources [name] === 'object') {
					tasks.push({ res: name, driver: driversByName [name], query: resources [name] });
					
				} else if (resources [name] === '*') {
					tasks.push({ res: name, driver: driversByName [name], query: {} });
					
				} else {
					tasks.push({ res: name, driver: driversByName [name], resId: resources [name] });
				}
			}
			
			return new Request(tasks).success(success);
		};
		
		this.getDriver = function (name) {
			return driversByName [name];
		};
		
		
		var cbOffline = function () {};
		
		this.onOffline = function (cb) {
			if (typeof cb === 'function') {
				cbOffline = cb;
			}
		};
		
		vent.on('offline', function (event) {
			console.warn('No network connection');
			cbOffline.call(inst, event);
		});
	};
	
	return DataAccessLayer;
});