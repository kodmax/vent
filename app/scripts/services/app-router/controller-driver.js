define(['./event-bus', './controller-context'], function(EventBus, ControllerContext) {
	'use strict';

	/**
	 * @class app-router.ControllerDriver
	 */
	var ControllerDriver = function (hash, controller, params) {
		var eventBus = new EventBus();
		var controllerContext = new ControllerContext(hash, params, eventBus);
		
		this.navin = function () {
			eventBus.trigger('navin', {}, controllerContext);
		};
		
		this.navout = function () {
			eventBus.trigger('navout', {}, controllerContext);
		};
		
		this.dispose = function () {
			eventBus.trigger('dispose', {}, controllerContext);
		};
		
		controller.apply(controllerContext, params || []);
	};
	
	return ControllerDriver;
});