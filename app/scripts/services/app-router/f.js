define(['services/app-router/app-router', 'module'], function(AppRouter, module) {
	'use strict';

	return new AppRouter(module.config());
});