var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js')


app.use(middleware.logger);

app.get('/about', middleware.requiredAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('express server started on port ' + PORT);
});




