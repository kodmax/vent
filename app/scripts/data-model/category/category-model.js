define(['backbone'], function(Backbone) {
	'use strict';

	var CategoryModel = new Backbone.Model({
		idAttribute: 'id',
		
		url: function () {
			return 'data/categories/' + this.get(this.idAttribute) + '.json';
		}
	});
	
	return CategoryModel;
});
