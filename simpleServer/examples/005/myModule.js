url = require('url');

function getPathname(urlString) {
	return url.parse(urlString).pathname;
};

exports.getPathname = getPathname;