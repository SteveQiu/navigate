#!/usr/bin/env node
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var errorRouter = require('./app/error');
var http = require('http');
var port = process.env.PORT || '3000';

var app = express();
// view engine setup for render function
app.set('port', port);
app.set('views', path.join(__dirname, 'render'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/error', errorRouter);// can remove
app.use('/', (req,res)=>{
  res.redirect('/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Create HTTP server.
 */
/**
 * Listen on provided port, on all network interfaces.
 */

var server = http.createServer(app);
server.listen(port);
console.log('Server running at port ', port);

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (error)=>{
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
})