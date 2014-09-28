define(['backbone'], function(Backbone) {
	'use strict';

	var Item = Backbone.Model.extend({
		idAttribute: 'id'
	});
	
	return Item;
});