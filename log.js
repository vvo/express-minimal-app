var bunyan = require('bunyan');

var config = require('./config/');

module.exports = bunyan.createLogger({
  name: 'myapp',
  level: config.log.level,
  src: config.log.src
  // https://github.com/trentm/node-bunyan#src
});
