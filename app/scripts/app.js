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
		'universal-time': 'services/universal-time/f'
	},
	
	shim: {
		'modernizr.src': { exports: 'Modernizr'	}
	}
});

