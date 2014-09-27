define(['services/dquery/target-set'], function(TargetSet) {
	'use strict';

	var f = function (target) {
		return new TargetSet(target);
	};
	
	return f;
});