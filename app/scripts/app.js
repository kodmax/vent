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

require(['dom-templates'], function (tpl) {
	setTimeout(function () {
		document.body.removeChild(document.getElementsByTagName('app-loader')[0]);
		var appbarTpl = tpl('app-bar', { parent: document.body });
		var mainTpl = tpl('main-content', { parent: document.body });		
	}, 100);
});