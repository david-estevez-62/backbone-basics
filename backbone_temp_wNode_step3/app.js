var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');

var indexController = require('./controllers/index.js');


var app = express();

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// *** static directory *** //
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({extended: false}));





app.get('/', indexController.index);




var server = app.listen(5350, function() {
	console.log('Express server listening on port ' + server.address().port);
});
