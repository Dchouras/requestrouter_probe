/*
Main Server module, which listens on port 4000

*/
var http = require('http');
var url = require("url");
var node = require('./node');

var server = http.createServer();

server.on('request', function(req, res) {
	var path = url.parse(req.url).pathname;
	node.genResponse(path, req, res);
});

server.listen(80);
