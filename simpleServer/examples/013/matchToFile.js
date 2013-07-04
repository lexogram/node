var path = require("path"); // used for path.join()
var fs = require("fs"); // used for fs.exists()

function matchToFile(pathname, treatFile) {
	var file = path.join(process.cwd(), pathname);
	
	fs.exists(file, function (exists) {
		if (exists) {
			treatFile(file);
		} else {
			treatFile(0);
		}
	});
}
	
module.exports = matchToFile
