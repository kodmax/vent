define([], function() {
	'use strict';

	var Card = function (def, args, url) {
		
		console.log('card created', def);
		
		this.show = function () {
			console.log('showing card', def, args);
		};
		
		this.sleep = function () {
			console.log('sleeping card', def);
		};
		
		this.close = function () {
			console.log('closing card', def);
		};
		
		this.getUrl = function () {
			return url;
		};
	};
	
	return Card;
});