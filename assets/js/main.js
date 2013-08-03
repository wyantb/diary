
define(['angular'],
		function (angular) {

	'use strict';

	angular.module('diary.service', [])
		.value('diary', {
			placeholder: 'Change me!'
		});

	angular.module('diary.directive', []);

	angular.module('diary.filter', []);

	function DiaryController($scope, $http, diary) {
		$scope.Title = diary.placeholder;

		$http.get('rest/diary/1')
			.success(function(resp) {
				$scope.Contents = resp.Contents;
			});

		$scope.submit = function() {
			alert('submitting!');
		};
	}
	DiaryController.$inject = ['$scope', '$http', 'diary'];

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

