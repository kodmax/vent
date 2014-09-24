define(['app-router', 'modules/home/home-card', 'modules/category/category-card'], function(router, home, category) {
	'use strict';

	var initRoutes = function () {
		router.loadHomeCardDefinition(home);
		router.loadCardDefinition(category);
		router.start();
	};
	
	return initRoutes;
});