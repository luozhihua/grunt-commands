/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

    'use strict';

    grunt.registerMultiTask('command', 'Easy way to run shell commands, batch files or executable files in grunt.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var exec,
            options = this.options({
                force: true
            }),
            task = this.data,
            cmd  = task.cmd,
            args = task.args instanceof Array ? task.args : [];
            
        try {
            switch (task.type) {
                case "bat":
                case "batch":
                    exec = require('child_process').spawn(cmd, args);
                    break;

                //case "cmd": 
                default:
                    exec = require('child_process').exec(cmd);
                    break;
            }
        } catch(e) {

            if (options.force!==true) {
                grunt.log.writeln(e.message);
            } else {
                grunt.log.error(e.message);
            }
            
        } finally {
            exec = task = options = cmd = args = null;
        }
    });

};
