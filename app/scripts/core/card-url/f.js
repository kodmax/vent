define(['core/card-url/card-url'], function(cardUrl) {
	'use strict';

	var f = function (cardName, query) {
		return cardUrl.buildUrl(cardName, query);
	};
	
	return f;
});