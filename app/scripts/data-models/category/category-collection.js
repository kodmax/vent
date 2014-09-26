define(['backbone', './category-model'], function(Backbone, Model) {
	'use strict';

	var CategoryCollection = Backbone.Collection.extend({
		model: Model,
		
		initialize: function (models, query) {
			this.url = 'data/categories/all.json';
		}
	});
	
	return CategoryCollection;
});
