module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
        
        // clean
        clean: {
            dir: {
                src:['__tmp__*'],
            }
        },

        // this task
        command : {
            run_batch: {
                type: 'bat',
                cmd: 'test.bat',
                arg: []
            },
            run_cmd: {
                cmd: ['mkdir __tmp__newDirByCMD']
            }
        },

        // Unit tests.
        nodeunit: {
          tests: ['test/*_test.js'],
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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Rigister default task;
    grunt.registerTask("test", ['clean', 'command', 'nodeunit', 'clean']);

    // Rigister default task;
    grunt.registerTask("default", ['test']);
};
