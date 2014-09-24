define([], function() {
	'use strict';

	var Card = function (def, args) {
		
		this.show = function () {
			console.log('showing card', def, args);
		}
	};
	
	return Card;
});