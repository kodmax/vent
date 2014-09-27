define(['translate', 'rest', 'dom-templates', 'rivets', 'jquery'], function(t, rest, tpl, rivets, $) {
	'use strict';

	var card = {
		
		name: 'home',
		url: '',

		controller: function () {
			var card = this;
			
			rest({ 'categories': '*' }, function (categories) {
				var homeTpl = tpl('home-card', { parent: card.tpl.getNodeByName('content') });
				
				rivets.bind($(homeTpl.getNodeByName('content')), {
					categories: categories.models
				});
			});
			
			this.vent.on('dispose', function () {
				rivets.unbind($(homeTpl.getNodeByName('content')));
			});
		}
	};
	
	return card;
});