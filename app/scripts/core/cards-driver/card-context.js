define([], function() {
	'use strict';

	var CardContext = function (card, routeContext, vent, tpl, contentTpl) {
		this.tpl = contentTpl;
		this.vent = vent;
	};
	
	return CardContext;
});