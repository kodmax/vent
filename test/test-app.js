var allTestFiles = [];
var TEST_REGEXP = /^\/base\/test\/spec\/.*\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\/app\/scripts\//, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/scripts',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start,
  
	config: {
		xhr: {
			defaultContentType: 'application/json',
			expectContentType: 'application/json'
		}
	},
	
	paths: {
		'vent': 'services/event-bus/event-bus'
	}

});
