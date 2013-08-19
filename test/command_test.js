'use strict';

var grunt = require('grunt');

exports.command = {
  run_batchs: function(test) {
<<<<<<< HEAD
    setTimeout(function(){
=======
>>>>>>> 5c94fffc580bd88da6c6d337b1c40912af075f8c
      test.expect(1);

      var expected = grunt.file.exists('__tmp__bat');
      test.equal(expected, true, 'The batch file is not run success.');

      test.done();
<<<<<<< HEAD
    }, 1000);
  },
  run_cmd: function(test) {
    setTimeout(function(){
=======
    setTimeout(function(){
    }, 1000);
  },
  run_cmd: function(test) {
>>>>>>> 5c94fffc580bd88da6c6d337b1c40912af075f8c
      test.expect(1);

      var expected = grunt.file.exists('__tmp__cmd');
      test.equal(expected, true, 'The command is not run success.');

      test.done();
<<<<<<< HEAD
=======
    setTimeout(function(){
>>>>>>> 5c94fffc580bd88da6c6d337b1c40912af075f8c
    }, 1000);
  },
  run_sh: function(test) {

    setTimeout(function(){
      test.expect(1);
      var expected = grunt.file.exists('__tmp__shell');
      test.equal(expected, true, 'The shell file is not run success.');

      test.done();
<<<<<<< HEAD
    }, 1000);
=======
    }, 5000);
>>>>>>> 5c94fffc580bd88da6c6d337b1c40912af075f8c

  }
};
