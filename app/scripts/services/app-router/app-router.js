define(['./hash-matcher', './navigator', './controller-driver'], function(HashMatcher, Navigator, ControllerDriver) {
	'use strict';

	/**
	 * @namespace app-router
	 */
	
	/**
	 * Application Router.
	 * @class app-router.AppRouter
	 */
	var AppRouter = function (options) {
		var patterns = [];
		var hashMatcher = new HashMatcher(patterns);

		/**
		 * Same as appRouter.addRoute('', controller);
		 * @method app-router.AppRouter#setHomeRoute
		 * @param {app-router.route-controller} controller
		 * @returns app-router.AppRouter
		 */
		this.setHomeRoute = function (controller) {
			return this.addRoute('', controller);
		};
		
		/**
		 * @callback app-router.route-controller
		 * @this app-router.ControllerContext
		 */
		
		/**
		 * @method app-router.AppRouter#addRoute
		 * @param pattern
		 * @param {app-router.route-controller} controller
		 * @returns app-router.AppRouter
		 */
		this.addRoute = function (pattern, controller) {
			patterns.push({pattern: pattern, controller: controller});
			return this;
		};
		
		var notFoundController = function () {
			(console.warn || console.log) ('AppRouter: route not found');
		};
		
		/**
		 * @method app-router.AppRouter#setNotFoundRoute
		 * @param {app-router.route-controller} controller
		 * @returns app-router.AppRouter
		 */
		this.setNotFoundRoute = function (controller) {
			notFoundController = controller;
			return this;
		};
	
		
		var controller = function (controllerContext) {
			var context
		}
		
		var navigator;
		/**
		 * @method app-router.AppRouter#start
		 * @returns app-router.AppRouter
		 */
		this.start = function () {
			if (!navigator) {
				navigator = new Navigator({
					
					create: function (hash) {
						var match = hashMatcher.match(hash);
						if (match) {
							return new ControllerDriver(hash, match.controller, match.params);
							
						} else {
							return new ControllerDriver(hash, notFoundController);
						}
					},
					
					navin: function (driver) {
						driver.navin();
					},
					
					navout: function (driver) {
						driver.navout();
					},
					
					dispose: function (driver) {
						driver.dispose();
					}
					
				});
			}
			return this;
		};
	};
	
	return AppRouter;
});