define(['backbone'], function(Backbone) {
	'use strict';

	var CategoryModel = Backbone.Model.extend({
		idAttribute: 'id',
		
		url: function () {
			return 'data/categories/' + this.get(this.idAttribute) + '.json';
		}
	});
	
	return CategoryModel;
});
