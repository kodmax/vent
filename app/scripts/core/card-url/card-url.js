define([], function() {
	'use strict';

	var CardUrl = function () {
		
		var urls = {};
		
		this.registerCard = function (card) {
			urls [card.name] = card.url;
		};
		
		this.buildUrl = function (cardName, query) {
			if (urls [cardName]) {
				return '#' + urls [cardName].replace(/:([\w-]+)/g, function (param, key) {
					return query [key];
				});
				
			} else {
				return '#' + cardName;				
			}
		};
	};
	
	return new CardUrl();
});