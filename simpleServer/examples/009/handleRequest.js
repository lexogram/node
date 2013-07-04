var url = require("url");
var matchToFile = require('./matchToFile');

function handleRequest(request, response) {
  console.log("Request received for: " + request.url);
	
  var pathname = url.parse(request.url).pathname;

  function treatFile(file) {
    if (file) {
      // Show the local path to the file in the browser
      response.end(file);
    } else {
      // Show an error in the browser and log it in the Terminal
      response.writeHead(404, {"Content-Type": "text/html"});
      response.end("<h1>Not Found</h1>");
      console.log("Not found: " + pathname);
    }
  }

  matchToFile(pathname, treatFile);
}

module.exports = handleRequest;