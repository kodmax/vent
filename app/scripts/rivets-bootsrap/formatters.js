define([ 'rivets', 'exception', 'card-url', 'translate', 'lib/argument-list'], function(rivets, Exception, cardUrl, t, args) {
	'use strict';

	var formatters = function() {
		rivets.formatters['card-link'] = function(id, cardname) {
			return cardUrl(cardname, { id: id });
		};

		rivets.formatters.currency = {
		    read : function(value) {
			    return '$' + (value || 0).toFixed(2);
		    }
		};
		
		rivets.formatters.translate = {
			read: function (text) {
				if (typeof text !== 'string') {
					text = args(arguments).slice(1).join(' ');
				}
				
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