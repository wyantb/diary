
define(['angular'],
		function (angular) {

	'use strict';

	angular.module('diary.service', [])
		.value('diary', {
			placeholder: 'Change me!'
		});

	angular.module('diary.directive', []);

	angular.module('diary.filter', []);

	function DiaryController($scope, diary) {
		$scope.title = diary.placeholder;
		$scope.message = 'And fill me out, too!';
	}
	DiaryController.$inject = ['$scope', 'diary'];

	angular.module('diary', ['diary.service', 'diary.directive', 'diary.filter'])
		.controller('DiaryController', DiaryController);

	angular.bootstrap(document, ['diary']);

});

