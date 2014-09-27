define(['dom-templates', 'jquery', 'app-router', './card-context', 'vent', 'core/card-url/card-url'], function(tpl, $, appRouter, CardContext, EventBus, cardUrl) {
	'use strict';

	var CardsDriver = function () {
		document.body.removeChild(document.getElementsByTagName('app-loader')[0]);
		
		var appCardsTpl = tpl('app-cards', { parent: document.body });
		tpl('app-bar', { parent: document.body });
		
		var box = appCardsTpl.getNodeByName('app-cards-container');

		this.registerCard = function (card) {
			cardUrl.registerCard(card);
			
			appRouter.addController(card.url, function () {
				var vent = new EventBus( { async: true });
				var cardTpl = tpl('app-card', { parent: box });
				var cardContentTpl = tpl(card.template, { parent: cardTpl.getNodeByName('content') });
				
				var cardContext = new CardContext(card, this, vent, cardTpl, cardContentTpl);
				
				card.controller.apply(cardContext, arguments);
				
				return {
					navin: function () {
						$(cardTpl.getRootNode()).addClass('active');
						vent.trigger('navin');
					},
					
					navout: function () {
						$(cardTpl.getRootNode()).removeClass('active');
						vent.trigger('navout');
					},
					
					dispose: function () {
						box.removeChild(cardTpl.getRootNode());
						vent.trigger('dispose');
					}
				};
			});			
		};
	};
	
	return new CardsDriver();
});