# grunt-contrib-commands [![Build Status](https://secure.travis-ci.org/luozhihua/grunt-contrib-commands.png?branch=master)](http://travis-ci.org/luozhihua/grunt-contrib-commands)

> Easy way to run shell commands, batch files or executable files in grunt.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-commands --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-commands');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4).*



## Command task
_Run this task with the `grunt command` command._

Task targets, options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### force
Type: `Boolean`  
Default: true

This overrides `grunt.file.delete` from blocking deletion of folders outside current working dir (CWD). Use with caution.

### Usage Examples

```js
    command : {
        
        // run a batch file;
        bat_1: {
            type: 'bat',
            cmd: 'test.bat',
            arg: []
        },

        // execute command
        cmd_1: {
            cmd: 'mkdir new-dir-name'
        }
    },
```

## Release History

 * 2013-07-19???v0.1.0???Refactored from grunt-contrib into individual repo.

---

Task submitted by [Colin Luo](http://www.luozhihua.com/)

*This file was generated on Fri Jul 19 2013 0:29:15.*
