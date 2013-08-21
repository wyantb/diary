
define(['angular', 'i18n!nls/strings', 'angular-resource'],
		function (angular, strings) {

	'use strict';

	angular.module('diary.service', ['ngResource'])
		.factory('Diary', ['$resource', function ($resource) {
			return $resource('rest/diary/:diaryId', {}, {});
		}]);

	angular.module('diary.directive', []);

	angular.module('diary.filter', [])
		.filter('i18n', function () {
			return function (input) {
				var currentLocaleObject = strings;
				var keys = input.split('.');
				var index = 0;
				while (angular.isObject(currentLocaleObject)) {
					currentLocaleObject = currentLocaleObject[keys[index]];
					++index;
				}
				return currentLocaleObject ? currentLocaleObject : 'KEY NOT FOUND: ' + input;
			};
		});

	function DiaryController($scope, $http, Diary) {
		$scope.diary = Diary.get({diaryId: 1});

		$scope.submit = function() {
			$scope.diary.$save();
		};
	}
	DiaryController.$inject = ['$scope', '$http', 'Diary'];

	angular.module('diary', ['diary.service', 'diary.directive', 'diary.filter'])
		.controller('DiaryController', DiaryController)
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'templates/partials/welcome.html'
				})
				.when('/diary/new', {
					templateUrl: 'templates/partials/diary/new.html',
					controller: 'DiaryController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

	angular.bootstrap(document, ['diary']);

});

