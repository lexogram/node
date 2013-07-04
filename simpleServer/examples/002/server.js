require('http').createServer(function(aRequest, aResponse){
	aResponse.end("Hello Browser!");
}).listen(3333);

console.log("Server running at http://localhost:3333");