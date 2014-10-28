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

    var os = require('os');
    var async = require('async');
    var taskName = 'commands';
    var description = 'Easy way to run shell commands, batch files or executable files in grunt.';

    grunt.registerMultiTask(taskName, description, function() {

        var process = require('child_process'),
            task    = this.data,
            cmd     = task.cmd,
            args    = task.args instanceof Array ? task.args : [],
            opts    = this.options({
                force: false
            }),
            done    = this.async();

        /**
         *
         * @param  {string} command [description]
         * @param  {[type]} args    [description]
         * @return {[type]}         [description]
         */
        function exec (command, args, callback) {
            process.exec(command, function(error, stdout, stderr) {
                if ( !error ) {
                    console.log(stdout);
                } else {
                    grunt.log.error(error.toString());
                }
            })
            .on('exit', callback);
        }

        /**
         * Which language of commands use.
         * @param  {String} cmd command
         * @return {String}     language of commands file name
         */
        function getCommandsLang (cmd) {

            if (typeof cmd !== 'string') {
                return;
            } else {
                cmd = cmd.replace(/^\s+|\s+$/g, '');
            }

            if (cmd.match(/\s+/) && !cmd.match(/\\\s+/)) {
                return 'unknow';
            }

            var extname = cmd.match(/\.[^\.]+$/);
                extname = extname!==null ? extname[0] : null;

            switch(extname) {
                case '.js':
                case '.node':
                    return 'nodejs';

                case 'sh':
                    return 'shell';

                case 'bat':
                    return 'batch';

                default:
                    return 'unknow';
            }
        }

        /**
         * [execDone description]
         * @param  {[type]} error  [description]
         * @param  {[type]} stdout [description]
         * @param  {[type]} stderr [description]
         * @return {[type]}        [description]
         */
        function execDone(code, force) {
            if (code) {
                done((force||opts.force) ? 0 : 1);
            } else {
                grunt.log.ok('Successful!');
                done(0);
            }
        }

        /**
         * [printError description]
         * @param  {[type]} error  [description]
         * @param  {[type]} stdout [description]
         * @param  {[type]} stderr [description]
         * @param  {[type]} force  [description]
         * @return {[type]}        [description]
         */
        function printError(error, stdout, stderr, force) {
            if (error !== null) {
                if (!force && !opts.force) {
                    grunt.log.error(error);
                } else {
                    grunt.log.warn('Got errors but forced!');
                }
            }
        }

        var lang;
        if (typeof task.cmd === 'string') {

            /*
              ```
              target: {
                  cmd: 'bin/deploy.sh' // string
              }
              ```
             */
            lang = task.type || getCommandsLang(task.cmd);
            switch (lang) {
                case 'nodejs':
                    task.cmd = task.cmd.replace(/\\/, '');
                    process.fork(task.cmd, function(error, stdout, stderr) {
                        printError(error, stdout, stderr, task.force);
                    }).on('exit', function(code) {
                        execDone(code, task.force);
                    });
                break;

                default:
                    process.exec(task.cmd, function(error, stdout, stderr) {
                        printError(error, stdout, stderr, task.force);
                    }).on('exit', function(code) {
                        execDone(code, task.force);
                    });
            }
        } else if (task.cmd instanceof Array) {

            /*
              ```
              target: {
                  cmd: [] // string
              }
              ```
             */
            async.each(task.cmd, function(cmd, callback) {

                var command = typeof cmd === 'string' ? {
                    cmd   : cmd,
                    type  : getCommandsLang(cmd),
                    force : false
                } : cmd;

                var lang = command.type;

                switch (lang) {

                    case 'nodejs':
                        task.cmd = command.cmd.replace(/\\/, '');
                        process.fork(command.cmd, function(error, stdout, stderr) {
                            printError(error, stdout, stderr, task.force||command.force);
                        }).on('exit', function(code) {
                            callback();
                        });
                    break;

                    default:
                        console.log(command.cmd);
                        process.exec(command.cmd, function(error, stdout, stderr) {
                            printError(error, stdout, stderr, task.force||command.force);
                        }).on('exit', function(code) {
                            callback();
                        });
                }

            }, function(error) {
                execDone(error ? 1 : 0, task.force);
            });
        }

    });
};
