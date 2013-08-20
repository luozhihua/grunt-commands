'use strict';

var grunt = require('grunt');
var os = require('os');

exports.command = {
  run_batchs: function(test) {
    if (os.type()==='Windows_NT') {
      setTimeout(function(){
        test.expect(1);

        var expected = grunt.file.exists('__tmp__bat');
        test.equal(expected, true, 'The batch file is not run success.');

        test.done();
      }, 1000);
    }
  },
  run_cmd: function(test) {
    setTimeout(function(){
      test.expect(1);

      var expected = grunt.file.exists('__tmp__cmd');
      test.equal(expected, true, 'The command is not run success.');

      test.done();
    }, 1000);
  },
  run_sh: function(test) {

    if (os.type()==='Linux') {
      setTimeout(function(){
        test.expect(1);
        var expected = grunt.file.exists('__tmp__shell');
        test.equal(expected, true, 'The shell file is not run success.');

        test.done();
      }, 1000);
    }
  }
};
