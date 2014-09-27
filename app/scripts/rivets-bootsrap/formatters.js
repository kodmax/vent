define([ 'rivets', 'exception', 'card-url'], function(rivets, Exception, cardUrl) {
	'use strict';

	var formatters = function() {
		rivets.formatters['card-link'] = function(id, cardname) {
			return cardUrl(cardname, { id: id });
		};

		rivets.formatters.currency = {
		    read : function(value) {
			    return value.toFixed(2) + " $";
		    },
		    publish : function(value) {
			    return Math.round(parseFloat(value) * 100) / 100;
		    }
		};

		rivets.formatters ['gallery-img-url'] = {
		    read: function(value) {
			    return 'images/products/' + value;
		    },
		    publish: function(value) {
			    throw new Exception ('oops, unable to convert back');
		    }
		};
	};

	return formatters;
});