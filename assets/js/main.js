
define(['angular', 'angular-resource'],
		function (angular) {

	'use strict';

	angular.module('diary.service', ['ngResource'])
		.factory('Diary', ['$resource', function ($resource) {
			return $resource('rest/diary/:diaryId', {}, {});
		}]);

	angular.module('diary.directive', []);

	angular.module('diary.filter', []);

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

