define(['./event-bus', './controller-context'], function(EventBus, ControllerContext) {
	'use strict';

	/**
	 * @class app-router.ControllerDriver
	 */
	var ControllerDriver = function (hash, controller, params, options) {
		options = options || {};
		
		var eventBus = new EventBus();
		var controllerContext = new ControllerContext(hash, params, eventBus);
		
		this.navin = function () {
			eventBus.trigger('navin', {}, controllerContext);
			if (options.trivialController) {
				controller.apply(controllerContext, params || []);
			}
		};
		
		this.navout = function () {
			eventBus.trigger('navout', {}, controllerContext);
		};
		
		this.dispose = function () {
			eventBus.trigger('dispose', {}, controllerContext);
		};
		
		if (!options.trivialController) {
			controller.apply(controllerContext, params || []);
		}
	};
	
	return ControllerDriver;
});