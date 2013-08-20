'use strict';

var grunt = require('grunt');

exports.command = {
  run_batchs: function(test) {
      setTimeout(function() {
          test.expect(1);

          var expected = grunt.file.exists('__tmp__bat'),
              isWindows = grunt.file.exists('__tmp__Windows_NT');
          expected = isWindows ? expected : true;
          test.equal(expected, true, 'The batch file is not run success.'+ (expected));
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
        var expected = grunt.file.exists('__tmp__shell'),
              isLinux = grunt.file.exists('__tmp__Linux');
          expected = isLinux ? expected : true;
        test.equal(expected, true, 'The shell file is not run success.');

        test.done();
      }, 1000);
  }
};
