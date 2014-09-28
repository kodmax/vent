define(['backbone', 'modules/shopping-cart/item', 'modules/shopping-cart/shopping-list', 'underscore'], function(Backbone, Item, shoppingList, _) {
	'use strict';

	var Cart = Backbone.Model.extend({
		defaults: {
			productsCount: 0
		},
		updateTotals: function () {
			var ammount = 0;
			var count = 0;
			
			_.each(shoppingList.models, function (item) {
				ammount += item.get('ammount');
				count += item.get('quantity');
			});
			
			this.set('productsCount', count);
			this.set('totalAmmount', ammount);			
		},
		initialize: function () {
			shoppingList.on('add remove change reset', this.updateTotals, this);
			this.updateTotals();
		}
	});
	
	return new Cart({ shoppingList: shoppingList });
});