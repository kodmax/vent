define(['jquery'], function($) {
	'use strict';

	var CardContext = function (card, routeContext, vent, tpl, contentTpl, nav) {
		this.tpl = contentTpl;
		this.vent = vent;
		
		this.setNavBack = function (hash) {
			nav.set('backURL', hash);
		};
		
		this.setLoading = function () {
			$(tpl.getNodeByName('content')).hide();
			$(tpl.getNodeByName('loader')).show();
		};
		
		this.setLoaded = function () {
			$(tpl.getNodeByName('loader')).hide();
			$(tpl.getNodeByName('content')).show();
			
			tpl.getNodeByName('content').appendChild(contentTpl.getRootNode());
		};
	};
	
	return CardContext;
});