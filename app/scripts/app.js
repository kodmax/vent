require.config({

	config: {
		xhr: {
			defaultContentType: 'application/json',
			expectContentType: 'application/json'
		}
	},
	baseUrl: 'scripts/',
	
	paths: {
		'modernizr': 'amd-wrappers/modernizr',
		'modernizr.src': '.3rd-party/modernizr/modernizr',
		'xhr': 'services/xhr',
		'universal-time': 'services/universal-time/f',
		'rivets': '.3rd-party/rivets/dist/rivets',
		'jquery': '.3rd-party/jquery/dist/jquery',
		'tpl': 'compiled/templates'
	},
	
	shim: {
		'modernizr.src': { exports: 'Modernizr'	}
	}
});

require(['rivets', 'jquery', 'tpl'], function (rivets, $, tpl) {
	$.noConflict();

	var items = [{label: 'a'}, {label: 'b'}];
	
	rivets.bind($(tpl('home', { parent: document.body })), {
		items: items
	});
	
});