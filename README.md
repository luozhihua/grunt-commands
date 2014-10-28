# grunt-commands [![Build Status](https://secure.travis-ci.org/luozhihua/grunt-commands.png?branch=master)](http://travis-ci.org/luozhihua/grunt-commands)

> Easy way to run shell commands, batch files or executable files in grunt.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-commands --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-commands');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4).*


## Command task
_Run this task with the `grunt commands` command._

Task targets, options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### force
Type: `Boolean`
Default: true

### Usage Examples

```js
    watch: {
        // ...
    },

    // this task (grunt-commands)
    commands: {
        options: {force: false},
        target_1: {
            cmd: 'xxx.js', // detected to nodejs
        },
        target_2: {
            cmd: [
                'xxx.sh', // detected to shell
                {
                    cmd: 'xxx.bat', // detected to batch commands
                    force: true
                },
                'cd ./xxx/a' // any commands of OS supports
            ]
        }
    }

    jshint: {
        // ...
    }
```

- Use nodejs file as commands
```js
    commands : {

        // Run tests via nodejs
        tests: {
            cmd: './test/tests.js'
        },

        // If file name has space chars
        // you must write it like this.
        // this is usually by Windows users
        test2: {
            cmd: './test/include\\ space.js'
        },
    }
```

- Use shell file as commands (Only for Linux/Unix platform)
```js
    commands : {

        // Deploy project via ShellScript
        deploy: {
            cmd  : './test/deploy.sh',
            force: true
        }
    }
```

- Use batch commands file (Only for Windows platform).
```
    commands : {
        // Package to zip file via Windows batch file
        zip: {
            cmd  : './test/zip.bat'
        }
    }
```

- Custom commands your OS supports.
```js
    // this task
    commands: {

        someOthorCommands: {
            cmd: [
                // commands one
                {
                    cmd: 'cd tmp && echo "Time `date`" > cmd.log',

                    // if dir `tmp` exists will throw an error,
                    // so set `force: true` to igone the error.
                    force: true
                },

                // commands two
                'cd tmp && echo "Time `date`" > cmd2.log',

                // Rename js file, special the extend name is `.js`
                renameNodejsFile: {
                    cmd  : 'mv ./tmp/nodejs.js ./tmp/nodejs-md.js'
                },

                // Delete shell file, special the extend name is `.sh`
                renameNodejsFile: {
                    cmd  : 'rm ./tmp/shell-md.sh'
                }
            ]
        }
    },
```

## Release History

- 2014-10-28 v0.1.7
    - Add feture
    - automaticly to detect commands type.
    - Use nodejs.child_process.exec as default executor, Let it support as more command types as OS supports.
  - _Bug fixed:_
  - #3 Rename from `grunt-contrib-commands` to `grunt-commands`.
  - #4 Rewrite commands executor use `node.child_process`.
  - #5 Change all task name as same of `commands`.
- 2013-07-19 v0.1.0 Start up project .

---

Task submitted by [Colin Luo](http://www.luozhihua.com/)

*This file was generated on Fri Jul 19 2013 0:29:15.*
