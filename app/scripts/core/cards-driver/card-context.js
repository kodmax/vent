define([], function() {
	'use strict';

	var CardContext = function (card, routeContext, vent, tpl) {
		this.vent = vent;
		this.tpl = tpl;
	};
	
	return CardContext;
});