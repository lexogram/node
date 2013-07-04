var url = require("url");
var fs = require("fs"); // used for fs.readFile()
var matchToFile = require("./matchToFile");

function handleRequest(request, response) {
  console.log("Request received for: " + request.url);
	
  var pathname = url.parse(request.url).pathname;

  function treatFile(file) {
    if (file) {
      // Show the local path to the file in the browser
      fs.readFile(file, "utf8", deliverFile);

    } else {
      // Show an error in the browser and log it in the Terminal
      response.writeHead(404, {"Content-Type": "text/html"});
      response.end("<h1>Not Found</h1>");
      console.log("Not found: " + pathname);
    }
  }
  
  function deliverFile(error, contents) {
    response.writeHeader(200, {"Content-Type": "text/html"}); 
    response.write(contents, "utf8");
		response.end();
  }

  matchToFile(pathname, treatFile);
}

module.exports = handleRequest;