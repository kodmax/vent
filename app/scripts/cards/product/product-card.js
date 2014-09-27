define(['translate', 'rest', 'rivets'], function(t, rest, rivets) {
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
					product: product
				});
			});
			
			this.vent.on('dispose', function () {
				rivetsView.unbind(card.tpl);
			});
		}
	};
	
	return card;
});