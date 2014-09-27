define(['translate', 'rest', 'rivets'], function(t, rest, rivets) {
	'use strict';

	var card = {
		
		url: 'category/:id',
		name: 'category',
		template: 'category-card',
		
		controller: function (id) {
			var card = this;
			var rivetsView;
			
			rest({ 'category': id, 'products': { categoryId: id } } , function (category, products) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					category: category,
					products: products.models
				});
			});
			
			this.vent.on('dispose', function () {
				rivetsView.unbind(card.tpl);
			});
		}
	};
	
	return card;
});