define(['rest-backbone-driver', './category-model', './category-collection'], function(BackboneDriver, Model, Collection) {
	'use strict';

	return new BackboneDriver(['category', 'categories', 'cats'], Model, Collection);
});