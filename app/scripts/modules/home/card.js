define([], function() {
	'use strict';

	var card = {
		
		urls: { home: '#' },
		name: 'name',
		
		controller: function () {
			console.log('home card');
		}
	};
	
	return card;
});