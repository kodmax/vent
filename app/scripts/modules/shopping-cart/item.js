define(['backbone'], function(Backbone) {
	'use strict';

	var Item = Backbone.Model.extend({
		idAttribute: 'id',
		calculateTotalPrice: function () {
			this.set('ammount', this.get('quantity') * this.get('product').get('price'));
		},
		initialize: function () {
			this.on('change:quantity', this.calculateTotalPrice, this);
			this.calculateTotalPrice();
		}
	});
	
	return Item;
});