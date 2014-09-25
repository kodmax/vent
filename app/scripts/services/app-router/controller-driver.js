define([], function() {
	'use strict';

	/**
	 * @class app-router.ControllerDriver
	 */
	var ControllerDriver = function (hash, controller, params) {
		console.log('driver created', hash, controller, params);
		
		this.navin = function () {
			console.log('driver navin', hash);
		};
		
		this.navout = function () {
			console.log('driver navout', hash);
		};
		
		this.dispose = function () {
			console.log('driver dispose', hash);
		};
	};
	
	return ControllerDriver;
});