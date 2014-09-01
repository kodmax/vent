require.config({

	baseUrl: 'scripts/',
	
	paths: {
		'angular.src': '.3rd-party/angularjs/angular',
		'ng': 'amd-wrappers/angular',
		'modernizr': 'amd-wrappers/modernizr',
		'modernizr.src': '.3rd-party/modernizr/modernizr',
		'jquery': 'amd-wrappers/jquery'
	},
	
	shim: {
		'angular.src': { exports: 'angular'	},
		'modernizr.src': { exports: 'Modernizr'	}
	}
});

require(['ng'], function (ng) {
	'use strict';
	
	var myApp = ng.module('myApp', ['b'], function () {
		console.log('a config');
	});
	
	ng.module('b', [], function () {
		console.log('b config');
	});
	
	myApp.run(function () {
		console.log('app run');
	});
	
	myApp.controller('myCtrl', function($scope) {
	    console.log("app controller");
	});
});
