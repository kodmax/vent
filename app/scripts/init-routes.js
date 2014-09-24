define(['app-router', 'modules/home/card-definition'], function(router, home) {
	'use strict';

	var initRoutes = function () {
		router.loadCardDefinition(home);
		router.start();
	};
	
	return initRoutes;
});