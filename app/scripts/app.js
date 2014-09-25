require.config({

	baseUrl: 'scripts/',
	
	paths: {
		'modernizr': '.3rd-party/modernizr/modernizr',
		'universal-time': 'services/universal-time/f',
		'jquery': '.3rd-party/jquery/dist/jquery',
		'jquery.no-global': '.no-global/jquery',
		'dom-templates': '.compiled/templates',
		'underscore': '.3rd-party/underscore/underscore',
		'underscore.no-global': '.no-global/underscore',
		'backbone': '.3rd-party/backbone/backbone',
		'backbone.no-global': '.no-global/backbone',
		'dom-node': 'services/dom-node/dom-node',
		'app-router': 'services/app-router/f',
		'translate': 'services/translate/t',
		'exception': 'lib/exception'		
	},
	
	map: {
		'backbone.no-global': { backbone: 'backbone'},
		'underscore.no-global': { underscore: 'underscore'},
		'jquery.no-global': { jquery: 'jquery'},
		'*': {jquery: 'jquery.no-global', underscore: 'underscore.no-global', backbone: 'backbone.no-global'}
	},
	
	shim: {
		'modernizr': { init: function () {
			var modernizr = Modernizr;
			delete window.Modernizr;
			return modernizr;
		}}
	}
});

require(['dom-templates', 'app-router', 'services/app-router/navigator'], function (tpl, appRouter, Navigator) {
	document.body.removeChild(document.getElementsByTagName('app-loader')[0]);
	tpl('app-bar', { parent: document.body });
	
	
	new Navigator({
		create: function (url) {
			console.log('create', url);
			return { url: url };
		},
		navin: function (context) {
			console.log('navin', context);
		},
		navout: function (context) {
			console.log('navout', context);
		},
		dispose: function (context) {
			console.log('dispose', context);
		}
	});
	
	
	appRouter.setHomeRoute(function () {
		
	});
	
	appRouter.addRoute('category/:id', function (id) {
		
	});
	
	appRouter.addRoute('product/:id', function (id) {
		
	});
	
	appRouter.setNotFoundRoute(function () {
		
	});
});
