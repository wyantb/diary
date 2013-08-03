
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
		.controller('DiaryController', DiaryController);

	angular.bootstrap(document, ['diary']);

});

