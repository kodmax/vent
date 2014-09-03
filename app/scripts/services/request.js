define ([], function () {
	'use strict';
	
	/**
	 * @class Request
	 */
	var Request = function (config, method, url) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);

		var callbacks = {};
		var inst = this;
		
		xhr.onloadend = function (pe) {
			var json;
			if (config.jsonMimeTypes.indexOf(xhr.getResponseHeader('Content-Type')) !== -1) {
				json = JSON.parse(xhr.responseText);
			}

			if ((xhr.status >= 200) && (xhr.status < 300)) {
				if (typeof callbacks.success === 'function') {
					callbacks.success.call(xhr, json || xhr.responseText || xhr.response, pe);
				}
				
			} else {
				if (typeof callbacks.error === 'function') {
					callbacks.error.call(xhr, json || xhr.responseText || xhr.response, pe);
				}				
			}
		};

		/**
		 * @method Request#success
		 */
		this.success = function (callback) {
			callbacks.success = callback;
			
			return this;
		};
		
		/**
		 * @method Request#error
		 */
		this.error = function (callback) {
			callbacks.error = callback;
			
			return this;
		};
		
		this.abort = function () {
			xhr.abort();
		};
		
		xhr.send();
	};

	return Request;
});
