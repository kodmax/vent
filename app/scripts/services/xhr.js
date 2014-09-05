define (['services/request', 'services/url', 'module'], function (Request, url, module) {
	'use strict';
	
	var XHR = function () {
		var config = {
			jsonMimeTypes: ['application/json']
		};
		
		
		
		this.config = function (callback) {
			callback.call(this, config);
		};
		
		this.get = function (path, query) {
			return new Request(config, 'GET', url(path, query));
		};
		
		this.post = function (path, query) {
			return new Request(config, 'POST', url(path, query));
		};
		
		this.put = function (path, query) {
			return new Request(config, 'PUT', url(path, query));
		};
		
		this.remove = this ['delete'] = function (path, query) {
			return new Request(config, 'DELETE', url(path, query));
		};
		
		this.noConflict = function () {
			delete window.xhr;
			return this;
		};
		
		
		this.url = url;
	};
	
	return new XHR();
});