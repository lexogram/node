var path = require("path"); // used for path.join()

function matchToFile(pathname) {
	var file = path.join(process.cwd(), pathname);
 
	return file;
}
	
module.exports = matchToFile
