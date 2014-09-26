define(['backbone', './product-model'], function(Backbone, Model) {
	'use strict';

	var ProductCollection = new Backbone.Collection({
		model: Model,
		
		initialize: function (models, query) {
			this.url = 'data/products/category-' + query.categoryId + '.json';
		}
	});
	
	return ProductCollection;
});
