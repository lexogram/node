var path = require("path"); // used for path.join()
var fs = require("fs"); // used for fs.exists()

function matchToFile(pathname, treatFile) {
	if (pathname.charAt(pathname.length - 1) === "/") {
		pathname += "index.html";
	}
	
  var file = path.join(process.cwd(), pathname);
  var metadata;
	
  fs.exists(file, function (exists) {
    if (exists) {
      metadata = getMetadata();
    } else {
      metadata = {};
      file = undefined;
    }
		
    treatFile(file, metadata.contentType, metadata.encoding);
  });

  function getMetadata() {
    return {contentType: "text/html", encoding: "utf8"};
  }
}
	
module.exports = matchToFile;
