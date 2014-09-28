define(['translate', 'rest', 'rivets', 'card-url', 'cart-model', 'underscore', 'backbone'], function(t, rest, rivets, cardUrl, cart, _, Backbone) {
	'use strict';

	var card = {
		
		url: 'shopping-cart',
		name: 'shopping-cart',
		template: 'shopping-cart',
		
		controller: function (id) {
			var card = this;
			var rivetsView;

			var productsLoaded = function (products) {
				_.each(cart.get('shoppingList').models, function (item) {
					item.calculateTotalPrice();
				});
				
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					items: cart.get('shoppingList').models,
					cart: cart,
					placeTheOrder: function () {
						print();
					}
				});
				
				card.setLoaded();
			};
			
			
			var productIds = _.map(cart.get('shoppingList').models, function (model) { return model.get('productId'); });
			if (productIds.length > 0) {
				rest({ 'products': productIds } , function (products) {
					
					productsLoaded();
				});
				
			} else {
				productsLoaded();
			}

			
			this.vent.on('dispose', function () {
				rivetsView.unbind(card.tpl);
			});
		}
	};
	
	return card;
});