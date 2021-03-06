// need to disableno-unused-vars for eslint because express
// detects error handlers middlewares with function arity
/*eslint no-unused-vars: 0*/

var config = require('../config/');

module.exports = function errorMiddleware(err, req, res, next) {
  var log = req.log;

  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: config.environment === 'development' ? err : {}
  });

  log.error(err, err.message);
};
