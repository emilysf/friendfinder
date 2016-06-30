//npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//express setup/local port setup
var app = express();
var PORT = process.env.PORT || 8080; 

//body-parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app/public'));

//points server to the route files
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//listener starts the server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

