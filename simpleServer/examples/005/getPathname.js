url = require('url');

function getPathname(urlString) {
	return url.parse(urlString).pathname;
};

module.exports = getPathname;