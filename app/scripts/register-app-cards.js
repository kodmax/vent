define(['core/cards-driver/cards-driver', 'cards/category/category-card', 'cards/product/product-card', 'cards/home/home-card', 'cards/shopping-cart/shopping-cart-card'], function(cardsDriver, categoryCard, productCard, homeCard, shoppingCartCard) {
	'use strict';

	var registerCards = function () {
		cardsDriver.registerCard(categoryCard);
		cardsDriver.registerCard(productCard);
		cardsDriver.registerCard(homeCard);
		cardsDriver.registerCard(shoppingCartCard);
	};
	
	return registerCards;
});