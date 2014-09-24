define(['backbone', 'exception', 'lib/argument-list', 'services/app-router/card'], function(Backbone, Exception, args, Card) {
	'use strict';

	var AppRouter = function () {
		
		var router = new Backbone.Router();
		var history = [];
		
		this.loadHomeCardDefinition = function (cardDefinition) {
			history.push(new Card(cardDefinition, [], ''));
		};
		
		this.loadCardDefinition = function (cardDefinition) {
			router.route(cardDefinition.url, cardDefinition.name, function () {
				history [history.length - 1].sleep();
				
				var card = new Card(cardDefinition, args(arguments), location.hash);
				history.push(card);
				card.show();
			});
		};
		
		this.start = function () {
			if (history.length === 0) {
				throw new Exception('Home card not defined');
			}
			
			if (location.hash === '') {
				Backbone.history.start({ silent: true });
				history [0].show();
				
			} else {
				Backbone.history.start();
			}
		};
		
		this.back = function () {
			if (history.length > 1) {
				history.pop().close();
				
				var card = history [history.length - 1];
				router.navigate(card.getUrl(), { replace: true, trigger: false });
				card.show();
			}
		};
		
		this.navigate = function (url) {
			router.navigate(url, { replace: true, trigger: true });
		};
	};
	
	return new AppRouter();
});