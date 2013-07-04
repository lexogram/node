var url = require("url");
var matchToFile = require('./matchToFile');

function handleRequest(request, response) {
  console.log("Request received for: " + request.url);
	
  var pathname = url.parse(request.url).pathname;

  matchToFile(pathname, function (file) {
    if (file) {
      // Show the local path to the file in the browser
      response.end(file);
    } else {
      // Show an error in the browser and log it in the Terminal
      response.end("404: File Not Found");
      console.log("Not found: " + pathname);
    }
  });
}

module.exports = handleRequest;