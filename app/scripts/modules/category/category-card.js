define(['translate'], function(t) {
	'use strict';

	var card = {
		
		url: 'category/:id',
		name: 'category',
		
		controller: function () {
			console.log('category card');
		}
	};
	
	return card;
});