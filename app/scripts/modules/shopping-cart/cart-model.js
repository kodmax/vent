define(['backbone', 'modules/shopping-cart/item', 'modules/shopping-cart/shopping-list', 'underscore'], function(Backbone, Item, shoppingList, _) {
	'use strict';

	var Cart = Backbone.Model.extend({
		defaults: {
			productsCount: 0
		},
		initialize: function () {
			shoppingList.on('add remove change reset', function () {
				var count = 0;
				_.each(shoppingList.models, function (item) {
					count += item.get('quantity');
				});
				this.set('productsCount', count);
			}, this);
		}
	});
	
	return new Cart({ shoppingList: shoppingList });
});