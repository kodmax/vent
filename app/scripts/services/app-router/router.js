define([], function() {
	'use strict';

	var AppRouter = function () {
		
		this.loadCardDefinition = function (card) {
			console.log('loading card', card);
		};
		
		this.start = function () {
			
		};
	};
	
	return new AppRouter();
});