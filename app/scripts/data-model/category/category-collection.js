define(['backbone', './category-model'], function(Backbone, Model) {
	'use strict';

	var CategoryCollection = new Backbone.Model({
		model: Model,
		
		initialize: function (models, query) {
			return 'data/categories/all.json';
		}
	});
	
	return CategoryCollection;
});
