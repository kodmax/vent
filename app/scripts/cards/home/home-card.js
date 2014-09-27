define(['translate', 'rest', 'dom-templates', 'rivets'], function(t, rest, tpl, rivets) {
	'use strict';

	var card = {
		
		name: 'home',
		url: '',
		template: 'home-card',

		controller: function () {
			var card = this;
			var rivetsView;
			
			rest({ 'categories': '*' }, function (categories) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					categories: categories.models
				});
				
				card.setLoaded();
			});
			
			this.vent.on('dispose', function () {
				view.unbind(card.tpl);
			});
			
			this.setNavBack(false);
		}
	};
	
	return card;
});