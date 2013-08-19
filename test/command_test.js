'use strict';

var grunt = require('grunt');

exports.command = {
  run_batchs: function(test) {
    setTimeout(function(){
      test.expect(1);

      var expected = grunt.file.exists('__tmp__bat');
      test.equal(expected, true, 'The batch file is not run success.');

      test.done();
    }, 1000);
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

    setTimeout(function(){
      test.expect(1);
      var expected = grunt.file.exists('__tmp__shell');
      test.equal(expected, true, 'The shell file is not run success.');

      test.done();
    }, 5000);
  }
};
