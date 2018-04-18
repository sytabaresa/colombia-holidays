'use strict';
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		jsdoc2md: {
			oneOutputFile: {
				src: [
					'*.js'
				],
				dest: 'README.md'
			}
		},
		uglify: {  
            options: {  
                compress: true  
            },  
            applib: {  
                src: [  
				'index.js',
				'holidays.js',
				'nextDay.js'
                ],  
                dest: 'js/applib.js'  
            }  
        }  
    }); 

	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('doc', 'jsdoc2md');
	grunt.registerTask('default','uglify')
};