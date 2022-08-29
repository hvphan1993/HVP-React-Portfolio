// var transporter = require("./mailMe");

var http = require('http');

console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port); 

