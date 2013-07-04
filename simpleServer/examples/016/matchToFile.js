// THIS VERSION OF MATCHTOFILE.JS CONTAINS A BUG WHICH WILL CRASH
// THE SERVER WHEN A VALID URL IS REQUESTED. THE BUG IS ASSOCIATED
// WITH THE NAMING OF VARIABLES AND WITH CLOSURES. IT CAN BE FIXED
// IN AT LEAST 3 DIFFERENT WAYS

var path = require("path"); // used for path.join()
var fs = require("fs"); // used for fs.exists()
var metadata = {
  '.css': {contentType: 'text/css', encoding: 'utf8'},
  '.gif': {contentType: "image/gif", encoding: 'binary'},
  '.html':{contentType: 'text/html', encoding: 'utf8'},
  '.jpg': {contentType: 'image/jpeg', encoding: 'binary'},
  '.js':  {contentType: 'application/javascript', encoding: 'utf8'},
  '.png': {contentType: 'image/png', encoding: 'binary'},
  '.txt': {contentType: 'text/plain', encoding: 'utf8'},
  '.zip': {contentType: 'application/zip', encoding: 'binary'}
};
console.log("\033[91mValue of metadata outside any functions:\033[39m");
console.log(metadata);

function matchToFile(pathname, treatFile) {
	if (pathname.charAt(pathname.length - 1) === "/") {
		pathname += "index.html";
	}
	
  var file = path.join(process.cwd(), pathname);
  var metadata = "dummy value";

  fs.exists(file, function (exists) {
    if (exists) {
      metadata = getMetadata(file);
    } else {
      metadata = {};
      file = undefined;
    }
		
    treatFile(file, metadata.contentType, metadata.encoding);
  });


  function getMetadata(file) {
		var extension = path.extname(file).toLowerCase();
		console.log("\033[91mValue of metadata in getMetadata():\033[39m");
		console.log(metadata);
	
		switch (extension) {
			case '.htm':
				extension = '.html';
				break;
			case '.jpeg':
				extension = '.jpg';
		}
		
		console.log("Extension: " + extension);
		
		var metaData = metadata[extension];
		if (!metaData) {
			metaData = metadata['.txt']
		}
	
		console.log("\033[91mValue returned from getMetadata():\033[39m");
		console.log(metaData);
		return metaData;
	}
}
	
module.exports = matchToFile;
