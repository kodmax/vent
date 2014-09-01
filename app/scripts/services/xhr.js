define (['services/request', 'services/url', 'module'], function (Request, url, module) {
	'use strict';
	
	var XHR = function () {
		var config = module.config();
		
		this.config = function (config) {
			config = config;
		};
		
		this.GET = function (path, query) {
			return new Request(config, 'GET', url(path, query));
		};
		
		this.POST = function (path, query) {
			return new Request(config, 'POST', url(path, query));
		};
		
		this.PUT = function (path, query) {
			return new Request(config, 'PUT', url(path, query));
		};
		
		this.DELETE = function (path, query) {
			return new Request(config, 'DELETE', url(path, query));
		};
		
		this.noConflict = function () {
			delete window.xhr;
			return this;
		};
	};
	
	return new XHR();
});