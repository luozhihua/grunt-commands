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
                cmd: 'mkdir new-dir-name'
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
            },
            beforeconcat: ['<%= dirs.src_js%>/tbc.Panel.js'],
            afterconcat: ['<%= dirs.temp_js%>/<%= pkg.name %>.js']
        }
    });
    
};
