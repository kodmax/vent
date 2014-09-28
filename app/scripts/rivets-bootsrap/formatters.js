define([ 'rivets', 'exception', 'card-url', 'translate'], function(rivets, Exception, cardUrl, t) {
	'use strict';

	var formatters = function() {
		rivets.formatters['card-link'] = function(id, cardname) {
			return cardUrl(cardname, { id: id });
		};

		rivets.formatters.currency = {
		    read : function(value) {
			    return '$' + value.toFixed(2);
		    }
		};
		
		rivets.formatters.translate = {
			read: function (text) {
				console.log(text, arguments, this);
				return t(text);
			}
		};

		rivets.formatters ['gallery-img-url'] = {
		    read: function(value) {
			    return 'images/products/' + value;
		    }
		};
	};

	return formatters;
});