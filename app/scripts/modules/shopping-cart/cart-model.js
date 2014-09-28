define(['backbone'], function(Backbone) {
	'use strict';

	var Cart = Backbone.Collection.extend({
		add: function (product) {
			console.log(product);
		}
	});
	
	return new Cart;
});