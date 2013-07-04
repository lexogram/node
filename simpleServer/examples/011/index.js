var server = require('./server');
var handleRequest = require('./handleRequest');
      
server.start(handleRequest);

