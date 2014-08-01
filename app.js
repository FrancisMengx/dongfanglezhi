var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('static-favicon');
var errorhandler = require('errorhandler');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var api = require('./routes/api')

var app = express()
;
// setup db connection
mongoose.connect("mongodb://localhost/lezhi_DB");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware({
  src: __dirname + '/public/stylus', // .styl files are located in `views/stylesheets`
  dest: __dirname + '/public/stylesheets', // .styl resources are compiled `/stylesheets/*.css`
  compile: function (str, path, fn) { // optional, but recommended
  stylus(str)
  .set('filename', path)
  .set('compress', true)
  .render(fn);
  }
}));

app.use(session({
      secret:'lezhi_session_secret',
          cookie:{
                    maxAge: 6000000
                        }
}))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

app.use('/api/', api);

// redirect all others to the index (HTML5 history)

app.get('*', routes.index);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(req, res, next){
  var user = req.session.user;
  res.locals.user = user ? user : null;
  next();
});

/// error handlers
if ('development' === app.get('env')) {
      app.use(errorhandler());
}
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        return res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
