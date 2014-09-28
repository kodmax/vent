define(['backbone', './product-model'], function(Backbone, Model) {
	'use strict';

	var ProductCollection = Backbone.Collection.extend({
		model: Model,
		
		initialize: function (models, query) {
			// the below is simplified for json files.
			if (query instanceof Array) {
				this.url = 'data/products/all.json';
				
			} else {
				this.url = 'data/products/category-' + query.categoryId + '.json';	
			}		
		}
	});
	
	return ProductCollection;
});
