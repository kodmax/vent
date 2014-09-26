define(['rest', 'data-models/category/category-driver', 'data-models/product/product-driver'], function(rest, CategoryDriver, ProductDriver) {
	'use strict';

	var loadDataModels = function () {
		rest().resource(CategoryDriver);
		rest().resource(ProductDriver);		
	};
	
	return loadDataModels;
});