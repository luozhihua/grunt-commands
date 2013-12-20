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
    var taskName = 'command';
    var description = 'Easy way to run shell commands, batch files or executable files in grunt.';

    grunt.registerMultiTask(taskName, description, function() {

        var process = require('child_process'),
            task    = this.data,
            cmd     = task.cmd,
            args    = task.args instanceof Array ? task.args : [],
            opts    = this.options({
                force: true
            }),
            done    = this.async();

        function run(file, args) {
            if (typeof file === 'string') {
                if (file.match(/\.sh$/)) {
                    shell.apply(this, arguments);
                } else if (file.match(/\.bat$/)) {
                    bat.apply(this, arguments);
                } else {
                    grunt.log.writeln('Do not support this file type:' + file);
                }
            }
        }

        /**
         * run batch file
         * @since 0.1.4
         * @platform Window
         * @
         * @return {[type]} [description]
         */
        function bat(batFile, args, options) {
          grunt.log.writeln('os type: '+ os.type());

          // var runner = process.spawn('call '+batFile, args);
          // bind(runner);

          process.exec(batFile, function(error, stdout, stderr){
            if ( !error ) {
              console.log(stdout);
            } else {
              console.log(error);
            }
          })
          .on('exit', function (code){ done(!code); });
        }

        /**
         * run batch file
         * @function shell
         * @since 0.1.4
         * @platform Window
         * @
         * @return {[type]} [description]
         */
        function shell(shellFile, args, options) {
          grunt.log.writeln('os type: '+ os.type());

          // var runner = process.spawn('sh '+shellFile, args);
          // bind(runner);

          process.exec(shellFile, function(error, stdout, stderr){
            if ( !error ) {
              console.log(stdout);
            } else {
              console.log(error);
            }
          })
          .on('exit', function (code){ done(!code); });
        }

        /**
         * bind events to child_process
         * @function
         * @param  {child_process} runner child_process
         */
        function bind(runner) {

            // 捕获标准输出并将其打印到控制台
            runner.stdout.on('data', function (data) {
                grunt.log.writeln('标准输出：\n' + data);
            });

            // 捕获标准错误输出并将其打印到控制台
            runner.stderr.on('data', function (data) {
                grunt.log.writeln('错误：\n' + data);
            });

            // 注册子进程关闭事件
            runner.on('exit', function (code, signal) {
                grunt.log.writeln('子进程已退出，代码：' + code + signal);
            });
        }

        try {
            switch (task.type) {
                case "bat":
                case "batch":
                case "shell":
                    run(cmd, args);
                    break;

                //case "cmd":
                //case "exe":
                default:
                    if (cmd instanceof Array) {
                        cmd.forEach(function(i){
                            process.exec(i)
                            .on('exit', function (code){ done(!code); });;
                        });
                    } else {
                        process.exec(cmd)
                        .on('exit', function (code){ done(!code); });;
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
            task = opts = cmd = args = null;
        }
    });
};
