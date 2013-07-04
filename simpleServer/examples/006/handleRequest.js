function handleRequest(request, response) {
	console.log("Request received:")
	console.log(request);
	response.end("Under construction...")
}

module.exports = handleRequest;