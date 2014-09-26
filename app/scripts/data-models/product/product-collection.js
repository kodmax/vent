define(['backbone', './product-model'], function(Backbone, Model) {
	'use strict';

	var ProductCollection = Backbone.Collection.extend({
		model: Model,
		
		initialize: function (models, query) {
			this.url = 'data/products/category-' + query.categoryId + '.json';
		}
	});
	
	return ProductCollection;
});
