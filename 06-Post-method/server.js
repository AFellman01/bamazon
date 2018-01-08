// Dependencies
var http = require("http");
var fs = require("fs")

var PORT = 8081;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('hello')
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
  // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
  // an html file.
  res.writeHead(200, {
    "Content-Type": "text/html"
  })
  res.end(data);
});

  // Saving the request data as a variable
  var requestData = "";
  // When the server receives data...
  req.on("data", function(data) {
    // Add it to requestData.
    requestData += data;
  });
  // When the request has ended...
  req.on("end", function() {
  // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });
};
// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
