define(['backbone', 'modules/shopping-cart/item'], function(Backbone, Item) {
	'use strict';

	var id = 1;
	
	var ShoppingList = Backbone.Collection.extend({
		addItem: function (product) {
			var item = this.findWhere({ productId: product.get('id')});
			
			if (item) {
				item.set('quantity', item.get('quantity') + 1);
				
			} else {
				item = new Item({ productId: product.get('id'), quantity: 1, id: id++ });
				this.add(item);
			}
		}
	});
	
	return new ShoppingList();
});