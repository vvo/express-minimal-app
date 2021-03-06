var bodyParser = require('body-parser');
var bunyanRequest = require('bunyan-request');
var compress = require('compression');
var express = require('express');
var path = require('path');

var config = require('./config/');
var error = require('./middlewares/error');
var index = require('./routes/index');

var log = require('./log');

var app = module.exports = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (config.environment === 'development') {
  app.set('view cache', false);
}

app.use(compress());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bunyanRequest({logger: log}));
app.use(require('./middlewares/error'));

app.use('/', index);

app.use(require('./middlewares/not-found'));

app.use(error);
