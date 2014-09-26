define(['app-router', 'dom-templates', 'jquery'], function(appRouter, tpl, $) {
	'use strict';

	var initRoutes = function () {
		document.body.removeChild(document.getElementsByTagName('app-loader')[0]);
		tpl('app-bar', { parent: document.body });
		
		var box = document.body;
		
		appRouter.addController('', function () {
			var homeCard = tpl('app-card', { parent: box });
			homeCard.getNodeByName('content').innerHTML = 'I\'m a home card! :)';
			$(homeCard.getRootNode()).hide();
			
			return {
				navin: function () {
					$(homeCard.getRootNode()).show();
				},
				
				navout: function () {
					$(homeCard.getRootNode()).hide();
				},
				
				dispose: function () {
					box.removeChild(homeCard.getRootNode());
				}
			};
		});
		
		appRouter.addController('category/:id', function (id) {
			var homeCard = tpl('app-card', { parent: box });
			homeCard.getNodeByName('content').innerHTML = 'I\'m a category ' + id + ' card! :)';
			$(homeCard.getRootNode()).hide();
			
			return {
				navin: function () {
					$(homeCard.getRootNode()).show();
				},
				
				navout: function () {
					$(homeCard.getRootNode()).hide();
				},
				
				dispose: function () {
					box.removeChild(homeCard.getRootNode());
				}
			};
		});
		
		appRouter.addController('product/:id', function (id) {
			var homeCard = tpl('app-card', { parent: box });
			homeCard.getNodeByName('content').innerHTML = 'I\'m a product ' + id + ' card! :)';
			$(homeCard.getRootNode()).hide();
			
			return {
				navin: function () {
					$(homeCard.getRootNode()).show();
				},
				
				navout: function () {
					$(homeCard.getRootNode()).hide();
				},
				
				dispose: function () {
					box.removeChild(homeCard.getRootNode());
				}
			};
		});
		
		appRouter.start();
	};
	
	return initRoutes;
});