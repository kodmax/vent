define(['dom-templates', './models/nav', 'rivets'], function(tpl, nav, rivets) {
	'use strict';

	var appBarSetup = function () {
		var appbarTpl = tpl('app-bar', { parent: document.body });
	
		rivets.bind(appbarTpl.getRootNode(), {
			nav: nav
		});
	};
	
	return appBarSetup;
});