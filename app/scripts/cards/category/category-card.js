define(['translate', 'rest'], function(t, rest) {
	'use strict';

	var card = {
		
		url: 'category/:id',
		name: 'category',
		
		controller: function (id) {
			var card = this;
			
			rest({ 'category': id, 'products': { categoryId: id } } , function (category, products) {
				products.models.forEach(function (product) {
					card.tpl.getNodeByName('content').innerHTML += JSON.stringify(product.attributes);
				});
			});
		}
	};
	
	return card;
});