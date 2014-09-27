define(['translate', 'rest', 'rivets', 'card-url', 'backbone', 'appbar'], function(t, rest, rivets, cardUrl, Backbone, appbar) {
	'use strict';

	var card = {
		
		url: 'product/:id',
		name: 'product',
		template: 'product-card',
		
		controller: function (id) {
			var card = this;
			var rivetsView;
			
			var nav = new Backbone.Model({ backURL: '#' });

			rest({ 'product': id } , function (product) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					product: product
				});
				
				nav.set('backURL', cardUrl('category', product.get('categoryId')));
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