module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
        
        command : {
            test1: {
                type: 'bat',
                cmd: 'test.bat',
                arg: []
            },
            test2: {
                cmd: 'mkdir new_dir_name'
            },
            test3: {
                cmd: 'exec.exe'
            }
        },

        // JS语法校验
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        }
    });
    
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-commands');
};
