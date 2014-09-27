define(['translate', 'rest', 'rivets', 'app-router', 'card-url', 'backbone', 'appbar'], function(t, rest, rivets, appRouter, cardUrl, Backbone, appbar) {
	'use strict';

	var card = {
		
		url: 'category/:id',
		name: 'category',
		template: 'category-card',
		
		controller: function (id) {
			var card = this;
			var rivetsView;

			var nav = new Backbone.Model({ backURL: '#' });
			
			rest({ 'category': id, 'products': { categoryId: id } } , function (category, products) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					category: category,
					products: products.models,
					open: function (event, models) {
						appRouter.navigate(cardUrl('product', models.product.get('id')));
					}
				});
			});
			
			this.vent.on('dispose', function () {
				rivetsView.unbind(card.tpl);
			});
			
			
			this.vent.on('navin', function () {
				appbar.setNavModel(nav);
			});
		}
	};
	
	return card;
});