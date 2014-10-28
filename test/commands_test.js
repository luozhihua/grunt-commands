'use strict';

var grunt = require('grunt');

exports.commands = {
  testsTask: function(test) {
    var expected = grunt.file.exists('tmp/nodejs.log');
    test.expect(1);
    test.equal(expected, true, 'The batch file is not run success.'+ (expected));
    test.done();
  },
  deploy: function(test) {
    var expected = grunt.file.exists('tmp/shell.log');
    test.expect(1);
    test.equal(expected, true, 'The command is not run success.');
    test.done();
  },
  zip: function(test) {
    var expected = grunt.file.exists('tmp/bat.log');
    test.expect(1);
    test.equal(expected, true, 'The shell file is not run success.');
    test.done();
  },
  someOthorCommands: function(test) {
    var expected = grunt.file.exists('tmp/cmd.log');
    test.expect(1);
    test.equal(expected, true, 'The shell file is not run success.');
    test.done();
  }
};
