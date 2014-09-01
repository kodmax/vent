/* global angular */

var app = angular.module('app-bar', []);
app.directive('app-bar', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/app-bar.html'
	};
});

console.log('app start');