define([], function() {
	'use strict';

	var CardContext = function (card, routeContext, vent, tpl, contentTpl, nav) {
		this.tpl = contentTpl;
		this.vent = vent;
		
		this.setNavBack = function (hash) {
			nav.set('backURL', hash);
		};
	};
	
	return CardContext;
});