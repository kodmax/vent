define(['translate', 'rest'], function(t, rest) {
	'use strict';

	var card = {
		
		url: 'product/:id',
		name: 'product',
		
		controller: function (id) {
			var card = this;
			
			rest({ 'product': id } , function (product) {
				card.tpl.getNodeByName('content').innerHTML = JSON.stringify(product.attributes);
			});
		}
	};
	
	return card;
});