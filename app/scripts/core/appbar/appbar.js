define(['dom-templates', './appbar-model', 'rivets', 'backbone', 'card-url'], function(tpl, AppbarModel, rivets, Backbone, cardUrl) {
	'use strict';

	var AppBar = function () {
		
		var appbarTpl = tpl('app-bar', { parent: document.body });
		
		var systemButtons = new Backbone.Collection([]);
		
		var appbarModel = new AppbarModel({
			'system-buttons': systemButtons.models,
			'nav': new Backbone.Model({ backURL: false })
		});
		
		
		
		this.init = function () {
			this.addSystemButton(new Backbone.Model({
				link: cardUrl('shopping-cart'),
				'class': 'icon__shopping-cart'
			}));
			
			rivets.bind(appbarTpl.getRootNode(), {
				model: appbarModel
			});			
		};
		
		
		this.setNavModel = function (model) {
			appbarModel.set('nav', model);
		};
		
		this.addSystemButton = function (item) {
			systemButtons.add(item);
		};
		
		this.show = function () {
			
		};
	};
	
	return AppBar;

});