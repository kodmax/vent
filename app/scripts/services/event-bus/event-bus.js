define([], function() {
	'use strict';

	var EventBus = function () {
		var events = {};
		
		this.on = function (eventName, callback) {
			events [eventName] = callback;
		};
		
		this.trigger = function (eventName, event, context) {
			if (events [eventName]) {
				events [eventName].call(context, event);
			}
		};
	};
	
	return EventBus;
});