'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var config = {};

	var paths = {
		js: 'diary/assets/js/'
	};

	grunt.initConfig({
		config: config,
		paths: paths,
		watch: {
		},
		clean: {
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= paths.js %>**/*.js',
				'!<%= paths.js %>lib/**'
			]
		},
		mocha: {
			options: {
				run: true,
			},
			src: ''
		},
		// TODO usemin?
		imagemin: {
		},
		cssmin: {
		},
		htmlmin: {
		},
		// Put files not handled in other tasks here
		copy: {
		},
		concurrent: {
			// Takes an array of tasks to run concurrently
		}
	});

	grunt.registerTask('clean', [
	]);

	grunt.registerTask('test', [
	]);

	grunt.registerTask('build', [
	]);

	grunt.registerTask('default', [
		'jshint',
	]);
};
