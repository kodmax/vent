define(['translate', 'rest', 'rivets', 'card-url', 'cart-model'], function(t, rest, rivets, cardUrl, cart) {
	'use strict';

	var card = {
		
		url: 'product/:id',
		name: 'product',
		template: 'product-card',
		
		controller: function (id) {
			var card = this;
			var rivetsView;

			rest({ 'product': id } , function (product) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					product: product,
					addToCart: function (event, models) {
						cart.get('shoppingList').addItem(models.product);
					}
				});
				
				card.setLoaded();
				card.setNavBack(cardUrl('category', { id: product.get('categoryId') }));
			});
			
			this.vent.on('dispose', function () {
				rivetsView.unbind(card.tpl);
			});
		}
	};
	
	return card;
});