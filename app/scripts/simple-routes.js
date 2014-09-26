define(['app-router', 'dom-templates', 'jquery', 'rest'], function(appRouter, tpl, $, rest) {
	'use strict';

	var initRoutes = function () {
		document.body.removeChild(document.getElementsByTagName('app-loader')[0]);
		tpl('app-bar', { parent: document.body });
		
		var box = document.body;
		
		appRouter.addController('', function () {
			var homeCard = tpl('app-card', { parent: box });
			homeCard.getNodeByName('content').innerHTML = 'I\'m a home card! :)';
			$(homeCard.getRootNode()).hide();
			
			rest({ 'categories': '*' }, function (categories) {
				categories.models.forEach(function (category) {
					homeCard.getNodeByName('content').innerHTML += JSON.stringify(category.attributes);
				});
			});

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
			var categoryCard = tpl('app-card', { parent: box });
			categoryCard.getNodeByName('content').innerHTML = 'I\'m a category ' + id + ' card! :)';
			$(categoryCard.getRootNode()).hide();
			
			rest({ 'category': id, 'products': { categoryId: id } } , function (category, products) {
				products.models.forEach(function (product) {
					categoryCard.getNodeByName('content').innerHTML += JSON.stringify(product.attributes);
				});
			});
			
			return {
				navin: function () {
					$(categoryCard.getRootNode()).show();
				},
				
				navout: function () {
					$(categoryCard.getRootNode()).hide();
				},
				
				dispose: function () {
					box.removeChild(categoryCard.getRootNode());
				}
			};
		});
		
		appRouter.addController('product/:id', function (id) {
			var productCard = tpl('app-card', { parent: box });
			productCard.getNodeByName('content').innerHTML = 'I\'m a product ' + id + ' card! :)';
			$(productCard.getRootNode()).hide();
			
			rest({ 'product': id } , function (product) {
				productCard.getNodeByName('content').innerHTML = JSON.stringify(product.attributes);
			});

			return {
				navin: function () {
					$(productCard.getRootNode()).show();
				},
				
				navout: function () {
					$(productCard.getRootNode()).hide();
				},
				
				dispose: function () {
					box.removeChild(productCard.getRootNode());
				}
			};
		});
		
		appRouter.start();
	};
	
	return initRoutes;
});