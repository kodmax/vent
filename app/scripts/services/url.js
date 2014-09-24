define ([], function () {
	
	var url = function (path, params) {
		
		if (typeof params === 'object') {
			var query = [];
			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params [key]));
				}
			}
			
			return path + '?' + query.join('&');
		}
		
		return path;
	};
	
	return url;
});