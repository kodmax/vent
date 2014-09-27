define(['translate', 'rest'], function(t, rest) {
	'use strict';

	var card = {
		
		name: 'home',
		url: '',

		controller: function () {
			var card = this;
			
			rest({ 'categories': '*' }, function (categories) {
				categories.models.forEach(function (category) {
					card.tpl.getNodeByName('content').innerHTML += JSON.stringify(category.attributes);
				});
			});
		}
	};
	
	return card;
});