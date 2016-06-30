var friendsData	= require('../data/friends.js');
var bodyParser = require('body-parser')
var path = require('path');

module.exports = function(app){
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({type:'application/vnd.api+json'}));

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		friendsData.push(req.body);
		res.json(true);
	});

}