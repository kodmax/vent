require.config({

	config: {
		xhr: {
			defaultContentType: 'application/json',
			expectContentType: 'application/json'
		}
	},
	baseUrl: 'scripts/',
	
	paths: {
		'modernizr': '.3rd-party/modernizr/modernizr',
		'xhr': 'services/xhr',
		'universal-time': 'services/universal-time/f',
		'jquery': '.3rd-party/jquery/dist/jquery',
		'dom-templates': 'compiled/templates'
	},
	
	shim: {
		'modernizr': { init: function () {
			var modernizr = Modernizr;
			delete window.Modernizr;
			return modernizr;
		}}
	}
});

require(['dom-templates', 'modernizr'], function (tpl, modernizr) {
	var homeTpl = tpl('home', { parent: document.body });
	
	console.log(homeTpl.getAllNamedNodes(), homeTpl.getNodeByName('the-node'));
	console.log(modernizr);
});