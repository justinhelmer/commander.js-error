(function() {
  'use strict';

  var _ = require('lodash');

  function error(options, err) {
    var slice = 0;

    if (options instanceof Error) {
      err = options;
      options = {};
    } else if (_.isPlainObject(options)) {
      slice = 1;
    }

    if (err) {
      process.stdout.write('\n  error');

      if (options.verbose && err.stack) {
        process.stdout.write(' (full stack trace):\n\n  ');
      } else {
        process.stdout.write(': ' + (err.message || ''));
      }
      if (options.verbose && err.stack) {
        process.stdout.write(err.stack);
      }

      console.log();
    } else {
      _.partial(console.error, '\n  error:').apply(null, _.slice(arguments, slice));
    }

    console.log();

    if (_.isFinite(options.exit) && options.exit < 256) {
      if (options.verbose) {
        console.log('  exiting with', options.exit);
      }

      process.exit(options.exit);
    } else if (_.isUndefined(options.exit) || options.exit === true) {
      if (options.verbose) {
        console.log('  exiting with 1');
      }

      process.exit(1);
    }
  }

  module.exports = error;
})(); 
