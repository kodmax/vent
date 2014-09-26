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
		'app-router': '.3rd-party/jsapp-router/dist/jsapp-router',
		'translate': 'services/translate/t',
		'exception': 'lib/exception',
		'rest': 'services/data-access-layer/f'
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

require(['./simple-routes', 'rest'], function (simpleRoutes, rest) {
	simpleRoutes();
	
	rest({ 'category': 1, 'products': { categoryId: 1 } } , function (category, products) {
		console.log(category, products);
	});
	
	rest({ 'categories': '*' }, function (categories) {
		console.log(categories);
	});
});
