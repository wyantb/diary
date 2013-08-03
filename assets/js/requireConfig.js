
require.config({
	paths: {
		main: 'js/main',
		angular: 'lib/angular/angular',
		'angular-resource': 'lib/angular-resource/angular-resource',
		i18n: 'lib/i18n'
	},
	shim: {
		angular: { exports: 'angular' },
		'angular-resource': ['angular']
	}
});

