var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || 3000;
var app = express();

//require('dotenv').config(); // loads process.env environment variables -- should look into using this
//usage is var dbHost = process.env.DB_HOST

// configuration =================
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('app'));         

app.use(require('./app/routes'));

var server = app.listen(port, function () {
	var host = server.address().address
	var port = server.address().port;

	console.log('App running at //%s:%s', host, port);
});