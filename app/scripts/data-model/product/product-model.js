define(['backbone'], function(Backbone) {
	'use strict';

	var ProductModel = new Backbone.Model({
		idAttribute: 'id',
		
		url: function () {
			return 'data/products/' + this.get(this.idAttribute) + '.json';
		}
	});
	
	return ProductModel;
});
