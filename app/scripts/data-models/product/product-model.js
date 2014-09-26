define(['backbone'], function(Backbone) {
	'use strict';

	var ProductModel = Backbone.Model.extend({
		idAttribute: 'id',
		
		url: function () {
			return 'data/products/' + this.get(this.idAttribute) + '.json';
		}
	});
	
	return ProductModel;
});
