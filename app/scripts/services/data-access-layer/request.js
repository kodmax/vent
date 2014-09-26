define([], function() {
	'use strict';

	var Request = function (tasks) {
		
		var onSuccess = function () { console.log('Request successful', result); };
		var onFail = function () { console.warn('Request failed', arguments); };
		
		this.success = function (success) {
			onSuccess = success;
		};
		
		this.error = function (error) {
			onFail = error;
		};

		var successCount = 0;
		var checkSuccess = function () {
			if (successCount === tasks.length) {
				onSuccess.apply(undefined, results);
			}
		};
		
		var results = [];
		var run = function (task, index) {
			var success = function (result) {
				results [index] = result;
				successCount++;
				checkSuccess();
			};
			
			var fail = function () {
				onFail.apply(this, arguments);
			};
			
			if (typeof task.query === 'object') {
				task.driver.query(task.query, success, fail);
				
			} else {
				task.driver.getById(task.resId, success, fail);
			}			
		};
		
		for (var i = 0; i < tasks.length; i++) {
			run (tasks [i], i);			
		}
		
		checkSuccess();
	};
	
	return Request;
});