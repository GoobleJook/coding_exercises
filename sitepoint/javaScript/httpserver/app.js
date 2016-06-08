// http server

'use strict';

var http = require('http');

var mappings = {
	g: 'http://www.google.com',
	y: 'http://www.yahoo.com'
}; 

var server = http.createServer(function (req, res) {
	var alias = req.url.substring(1);

	if (!mappings[alias]) {
		res.writeHead(404);
		return res.end(); // need return to prevent going to 302 
	}

	res.writeHead(302, {
		location: mappings[alias]
	});
	res.end();
});

server.listen(3000);