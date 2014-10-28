module.exports = function (grunt) {

    "use strict";

    var os = require('os'),
        osType = os.type();

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // clean
        clean: {
            dir: {
                src:['./tmp'],
            }
        },

        // this task
        commands : {

            // Run tests via nodejs
            // auto detected extend name of the file
            tests: {
                cmd: './test/tests.js'
            },

            test2: {
                cmd: './test/include\\ space.js'
            },

            // Deploy project via ShellScript
            deploy: {
                cmd  : './test/deploy.sh',
                force: true
            },

            // Deploy project via ShellScript
            deploy2: {
                cmd  : './test/include\\ space.sh',
                force: true
            },

            // Package to zip file via Windows batch file
            zip: {
                cmd  : './test/zip.bat'
            },

            // Package to zip file via Windows batch file
            nodejsLogFile: {
                cmd  : 'echo "Time `date`" > ./tmp/log.nodejs.js'
            },

            // Package to zip file via Windows batch file
            shellLogFile: {
                cmd  : 'echo "Time `date`" > ./tmp/log.shell.sh'
            },

            // Package to zip file via Windows batch file
            batchLogFile: {
                cmd  : 'echo "Time `date`" > ./tmp/log.batch.bat'
            },

            // Some other commands
            someOthorCommands: {
                cmd: [
                    // commands one
                    {
                        //cmd: 'mkdir tmp && cd tmp',
                        cmd: 'cd tmp && echo "Time `date`" > cmd.log',
                        //type: 'shell',

                        // if dir `tmp` exists will throw an error,
                        // so set `force: true` to igone the error.
                        force: true
                    },

                    // commands two
                    'cd tmp && echo "Time `date`" > cmd2.log'
                ]
            }
        },

        // Unit tests.
        nodeunit: {
          tests: ['test/*_test.js'],
        },

        // JSHint
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
    grunt.registerTask("test", ['clean', 'commands', 'nodeunit']);

    // Rigister default task;
    grunt.registerTask("default", ['test']);
};
