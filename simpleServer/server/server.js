var http = require("http");
var port = 5555;

function start(handleRequest) {
	http.createServer(handleRequest).listen(port);
	console.log('Server started at http://localhost:' + port + '/');
}

exports.start = start;