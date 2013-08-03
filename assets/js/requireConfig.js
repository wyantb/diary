
require.config({
	paths: {
		main: 'js/main',
		angular: 'lib/angular/angular',
		'angular-resource': 'lib/angular-resource/angular-resource'
	},
	shim: {
		angular: { exports: 'angular' },
		'angular-resource': ['angular']
	}
});

