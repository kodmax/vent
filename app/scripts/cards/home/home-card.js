define(['translate', 'rest', 'dom-templates', 'rivets', 'backbone', 'appbar'], function(t, rest, tpl, rivets, Backbone, appbar) {
	'use strict';

	var card = {
		
		name: 'home',
		url: '',
		template: 'home-card',

		controller: function () {
			var card = this;
			var rivetsView;
			
			var nav = new Backbone.Model({ backURL: false });

			rest({ 'categories': '*' }, function (categories) {
				rivetsView = rivets.bind(card.tpl.getRootNode(), {
					categories: categories.models
				});
			});
			
			this.vent.on('dispose', function () {
				view.unbind(card.tpl);
			});
			
			this.vent.on('navin', function () {
				appbar.setNavModel(nav);
			});
		}
	};
	
	return card;
});