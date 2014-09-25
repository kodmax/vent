define([], function() {
	'use strict';

	/**
	 * Reacts on hash changes. Calls create, navin, navout, dispose on the promise
	 * @class app-router.Navigator
	 * @param {app-router.NavigatorPromise} promise
	 */
	var Navigator = function (promise) {
		var contexts = {};
		
		var previousContext;
		var context;
		addEventListener('popstate', function (event) {
			console.log('popstate', event);
			var state = event.state;
			if (state && state ['state-id'] && contexts [state ['state-id']]) {
				context = contexts [state ['state-id']];
			}
		});
		
		addEventListener('hashchange', function (event) {
			console.log('hashchange', event, context);
			if (!context) {
				var stateId = new Date().getTime();
				
				context = contexts [stateId] = promise.create(event.newURL);
				history.replaceState({ 'state-id': stateId });				
			}
			
			previousContext && promise.navout(previousContext);
			promise.navin(context);
			
			previousContext = context;
			context = null;
		});
		
	};
	
	return Navigator;
});