var url = require("url");
var matchToFile = require('./matchToFile');

function handleRequest(request, response) {
	console.log("Request received for: " + request.url);
	
	var pathname = url.parse(request.url).pathname;
	var file = matchToFile(pathname);
	
	response.end(file);
}

module.exports = handleRequest;