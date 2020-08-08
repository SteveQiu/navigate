#!/usr/bin/env node
var http = require('http');
var app = require('./app/app');
var port = process.env.PORT || '3000';

/**
 * Create HTTP server.
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