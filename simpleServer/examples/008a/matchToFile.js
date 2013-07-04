var path = require("path"); // used for path.join()
var fs = require("fs"); // used for fs.exists()

function matchToFile(pathname, treatFile) {
	var file = path.join(process.cwd(), pathname);
	
	function callback_from_fs_exists(theFileExists) {
		if (theFileExists) {
			treatFile(file);
		} else {
			treatFile(0);
		}
	}

	fs.exists(file, callback_from_fs_exists);
}
	
module.exports = matchToFile
