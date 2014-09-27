define(['rivets'], function(rivets) {
	'use strict';

	var formatters = function() {
		rivets.formatters ['card-link'] = function (id, cardname) {
			return '#' + cardname + '/' + id;
		};
	};
	
	return formatters;
});