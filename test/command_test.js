'use strict';

var grunt = require('grunt');

exports.command = {
  run_batch: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('__tmp__newDirByBAT');
    test.equal(expected, true, 'The batch file is not run success.');

    test.done();
  },
  run_cmd: function(test) {
    test.expect(1);

    var expected = grunt.file.exists('__tmp__newDirByCMD');
    test.equal(expected, true, expected+'The command is not run success.');

    test.done();
  }
};
