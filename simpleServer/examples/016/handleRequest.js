var url = require("url");
var fs = require("fs"); // used for fs.readFile()
var matchToFile = require("./matchToFile");

function handleRequest(request, response) {
  console.log("Request received for: " + request.url);
	
  var pathname = url.parse(request.url).pathname;

  function treatFile(file, contentType, encoding) {
    if (file) {
      // Read the file into the computer's Random Access Memory (RAM)
      // from the local disk,  asynchronously, and when it's ready,
      // deliver it to the visitor's browser
      fs.readFile(file, encoding, deliverFile);

    } else {
      // Show an error in the browser and log it in the Terminal
      response.writeHead(404, {"Content-Type": "text/html"});
      response.end("<h1>Not Found</h1>");
      console.log("Not found: " + pathname);
    }
  
    function deliverFile(error, contents) {
  	  console.log(error);
  	  console.log(typeof contents);
  
  	  if (error) {
		  	response.writeHeader(500, {"Content-Type": "text/html"}); 
		  	response.write("<h1>" + error + "</h1><br>" + file, "utf8");
		  } else {
		  	response.writeHeader(200, {"Content-Type": contentType}); 
		    response.write(contents, encoding);
	  	}
    response.end();
    }
  }

  matchToFile(pathname, treatFile);
}

module.exports = handleRequest;