define(['backbone', './models/nav'], function(Backbone, Nav) {
	'use strict';

	var AppbarModel = Backbone.Model.extend({
	});
	
	return new AppbarModel ({
		nav: new Nav({backURL: ''})
	});
});