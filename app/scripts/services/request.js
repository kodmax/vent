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
			if (typeof callbacks.success === 'function') {
				callbacks.success.call(xhr, pe);
			}
		};

		/**
		 * @method Request#success
		 */
		this.success = function (callback) {
			callbacks.success = callback;
			
			return this;
		};
		
		this.json = function (callback) {
			callbacks.success = function (pe) {
				if (xhr.responseType !== 'application/json') {
					callback.call(xhr, JSON.parse(xhr.responseText), pe);
					
				} else {
					callback.call(xhr, xhr.response, pe);
				}
			};
			
			return this;
		};
		
		
		xhr.send();
	};

	return Request;
});
