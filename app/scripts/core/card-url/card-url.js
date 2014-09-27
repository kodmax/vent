define([], function() {
	'use strict';

	var CardUrl = function () {
		
		this.registerCard = function (card) {
			//console.log('card url register card', card);
		};
		
		this.buildUrl = function (cardName, query) {
			var id = query;
			return '#' + cardName + '/' + id;
		};
	};
	
	return new CardUrl();
});