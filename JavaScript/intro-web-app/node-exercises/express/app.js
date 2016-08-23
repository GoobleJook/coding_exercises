var express = require('express');
var app = express();

app.get('/jeer.txt', function(req, res){
	res.send("You're a jerk! A real big meanie!");
});


app.get('/cheer.txt', function(req, res){
	res.send('Yay, you! Write that effin thing!');
});


var server=app.listen(8080, function() {
	console.log('Listeining on port 8080');
});