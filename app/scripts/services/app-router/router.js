define(['backbone', 'exception', 'lib/argument-list', 'services/app-router/card', 'underscore'], function(Backbone, Exception, args, Card, _) {
	'use strict';

	var AppRouter = function () {
		
		var currentState;
		addEventListener('popstate', function (event) {
			currentState = event.state;
		});
		
		addEventListener('hashchange', function (event) {
			if (currentState && currentState.id && history [currentState.id]) {
				switchCard(currentState.id);
				
			} else {
				_.each(_.keys(history), function (id) {
					if (id > historyPointer) {
						delete history [id];
					}
				});
				matchUrl(event.newURL.replace(/.*#|.*/, ''));
			}
		});
		
		var historyPointer;
		var history = {};
		var cards = [];

		var switchCard = function (id) {
			if (historyPointer) {
				history [historyPointer].sleep();
			}
			
			history [historyPointer = id].show();
		};
		
		this.loadCardDefinition = function (cardDefinition) {
			cards.push(cardDefinition);
		};
		
		var matchUrl = function (url) {
			_.each(cards, function (card) {
				if (url === card.url) {
					var id = new Date().getTime();
					history [id] = new Card(card, [], url);
					window.history.replaceState({ id: id });
					switchCard(id);
				}
			});
		};
		
		this.start = function (opts) {
			opts = opts || {};
			
			matchUrl(window.location.hash.replace(/^#/, ''));
		};
	};
	
	return new AppRouter();
});