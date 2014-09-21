require.config({

	config: {
		xhr: {
			defaultContentType: 'application/json',
			expectContentType: 'application/json'
		}
	},
	baseUrl: 'scripts/',
	
	paths: {
		'each': 'helpers/each',
		'dom-node': 'services/dom-node/dom-node',
		'modernizr': 'amd-wrappers/modernizr',
		'modernizr.src': '.3rd-party/modernizr/modernizr',
		'xhr': 'services/xhr',
		'universal-time': 'services/universal-time/f'
	},
	
	shim: {
		'modernizr.src': { exports: 'Modernizr'	}
	}
});


require(['components/board/board'], function (Canvas) {
	
	var body = document.getElementsByTagName('body') [0];
	
	new Canvas({ parent: body, zoom: 8, width: 32, height: 32 });
});