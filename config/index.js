if (!process.env.APP_ENV) {
  throw new Error('You must specify an APP_ENV=environment variable');
}

var defaults = require('lodash').defaults;
var minimist = require('minimist');
var path = require('path');

var args = minimist(process.argv.slice(2));
var envConfig = require(path.join(__dirname, process.env.APP_ENV + '.json'));

module.exports = defaults(args, envConfig);
