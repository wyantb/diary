
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
		$scope.title = diary.placeholder;

		$http.get('js/message.json')
			.success(function(resp) {
				$scope.message = resp.message;
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

