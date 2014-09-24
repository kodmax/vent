define(['app-router', 'modules/home/card', 'modules/category/card'], function(router, home, category) {
	'use strict';

	var initRoutes = function () {
		router.loadCardDefinition(category);
		router.loadCardDefinition(home);
		router.start();
	};
	
	return initRoutes;
});