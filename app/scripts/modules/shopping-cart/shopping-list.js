define(['backbone', 'modules/shopping-cart/item'], function(Backbone, Item) {
	'use strict';

	var id = 1;
	
	var ShoppingList = Backbone.Collection.extend({
		addItem: function (product) {
			var item = this.findWhere({ productId: product.get('id')});
			
			if (item) {
				item.set('quantity', item.get('quantity') + 1);
				
			} else {
				item = new Item({ productId: product.get('id'), quantity: 1, id: id++, product: product });
				this.add(item);
			}
		}
	});
	
	return new ShoppingList([
	                         new Item({id: 1000, productId: 10, quantity: 3, product: new Backbone.Model({ id: 10, name: 'foo', price: 99, image: 'bag.png'})}),
	                         new Item({id: 1001, productId: 11, quantity: 4, product: new Backbone.Model({ id: 11, name: 'boo', price: 99, image: 'scraf.png'})}),
	                         new Item({id: 1002, productId: 12, quantity: 2, product: new Backbone.Model({ id: 12, name: '$1k', price: 1000, image: 'shoes.png'})}),
	                         new Item({id: 1003, productId: 13, quantity: 1, product: new Backbone.Model({ id: 13, name: 'Audi Q7', price: 99999, image: 'watch.png'})})
	                         ]);
});