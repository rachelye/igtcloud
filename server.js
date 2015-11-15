// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello IGTCloud\n");
});

// Listen on port 1337
server.listen(1337);

// Put a friendly message on the terminal
console.log("Web Server running on port 1337");