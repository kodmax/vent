define(['core/cards-driver/cards-driver', 'cards/category/category-card', 'cards/product/product-card', 'cards/home/home-card'], function(cardsDriver, categoryCard, productCard, homeCard) {
	'use strict';

	var registerCards = function () {
		cardsDriver.registerCard(categoryCard);
		cardsDriver.registerCard(productCard);
		cardsDriver.registerCard(homeCard);
	};
	
	return registerCards;
});