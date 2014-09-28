define(['jquery', 'dom-templates', 'rest'], function($, tpl, rest) {
	'use strict';

	var noNetworkHandler = function () {
		var offlineTpl = tpl('offline-warning', { parent: document.body });
		
		rest().on('offline', function () {
			$(offlineTpl.getRootNode()).addClass('active');
		});
	};

	return noNetworkHandler;
});