(function() {
  'use strict';

  var _ = require('lodash');

  function error(options) {
    var args = arguments;

    if (_.isPlainObject(options)) {
      args = _.slice(args, 1);
    } else {
      options = {};
    }

    _.partial(console.error, '\n  error:').apply(null, args);
    console.log();

    if (_.isFinite(options.exit) && options.exit < 256) {
      if (options.verbose) {
        console.log('Exiting with', options.exit);
      }

      process.exit(options.exit);
    } else if (_.isUndefined(options.exit) || options.exit === true) {
      if (options.verbose) {
        console.log('Exiting with 1');
      }

      process.exit(1);
    }
  }

  module.exports = error;
})();
