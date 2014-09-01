require.config({

	baseUrl: 'scripts/',
	
	paths: {
		'modernizr': 'amd-wrappers/modernizr',
		'modernizr.src': '.3rd-party/modernizr/modernizr',
		'jquery': 'amd-wrappers/jquery'
	},
	
	shim: {
		'modernizr.src': { exports: 'Modernizr'	}
	}
});

require([], function () {
	'use strict';

	console.log('app start');
});
