'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var config = {};

	var paths = {
		js: 'assets/js/',
		css: 'assets/css/'
	};

	grunt.initConfig({
		config: config,
		paths: paths,
		watch: {
			less: {
				files: '<%= paths.css %>**/*.less',
				tasks: 'less'
			}
		},
		clean: {
		},
		less: {
			'<%= paths.css %>main.css': '<%= paths.css %>main.less'
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

	grunt.registerTask('test', [
		'jshint'
	]);

	grunt.registerTask('build', [
		'less'
	]);

	grunt.registerTask('default', [
		'test',
		'build'
	]);

};
