define(['rest-backbone-driver', './product-model', './product-collection'], function(BackboneDriver, Model, Collection) {
	'use strict';

	return new BackboneDriver(['product', 'products'], Model, Collection);
});