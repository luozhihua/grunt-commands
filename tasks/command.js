/**
 * @module grunt-contrib-commands
 * @author Colin Luo - <mail@luozhihua.com>
 * @see [url=https://github.com/luozhihua/grunt-contrib-commands]
 *
 * @copyright Copyright (c) 2013 Colin Luo, contributors
 * @license https://github.com/luozhihua/grunt-contrib-commands/blob/master/LICENSE.md Licensed under the MIT license.
 */

module.exports = function(grunt) {

    'use strict';

    var taskName = 'command',
        description = 'Easy way to run shell commands, batch files or executable files in grunt.';

    grunt.registerMultiTask(taskName, description, function() {

        var exec,
            task    = this.data,
            cmd     = task.cmd,
            args    = task.args instanceof Array ? task.args : [],
            opts = this.options({
                force: true
            });

        try {
            switch (task.type) {
                case "bat":
                case "batch":
                    exec = require('child_process').spawn(cmd, args);
                    break;

                //case "cmd": 
                //case "exe":
                default:
                    exec = require('child_process');
                    if (cmd instanceof Array) {
                        cmd.forEach(function(i){
                            grunt.log.writeln(i);
                            exec.exec(i);
                        });
                    } else {
                        exec.exec(cmd);
                    }
                    break;
            }
        } catch(e) {

            if (opts.force!==true) {
                grunt.log.writeln(e.message);
            } else {
                grunt.log.error(e.message);
            }

        } finally {
            exec = task = opts = cmd = args = null;
        }
    });
};
