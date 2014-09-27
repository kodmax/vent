define(['../lib/break-exception'], function(BreakException) {
	'use strict';

	var each = function (enamerable, callback, context) {
		
		try {
			enumerable.forEach(function (value, index, arr) {
				var result = callback.call(context, value, index, arr);
				if (result !== undefined) {
					throw new BreakException({ result: result });
				}
			});
			
		} catch (e) {
			if (e instanceof BreakException) {
				return e.getEvent().result;
			}
			
			throw e;
		}
	};
});