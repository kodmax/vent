/* global define */
define([], function() {
	'use strict';
	
	var DCT2D = function (n) {
		var cos = new Array(n);
		var pi_2n = Math.PI / 2 * n;
		
		for (var i = 0; i < n; i++) {
			cos [i] = new Array (n);
			
			for (var j = 0; j < n; j++) {
				cos [i][j] = Math.cos(i * (2*j + 1) / pi_2n);
			}
		}
	
		this.F = function (v, u, get) {
			var f = 1/4 * (v ? 1 : 1/Math.sqrt(2)) * (u ? 1 : 1/Math.sqrt(2));
			
			for (var y = 0; y < n; y++) {
				for (var x = 0; x < n; x++) {
					f += get(x, y) * cos [v][y] * cos [u][x];
				}
			}
			
			return f;
		};
	};
	
	return DCT2D;
});