var http = require('http');
 
//Create a server 
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the browser
  res.end(); //end the response
}).listen(3001); //the server object listens on port 3001
 
console.log('Server started');
