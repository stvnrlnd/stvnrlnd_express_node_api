'use strict';

// ------ Require the packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// ------ Configure the application
var port = process.env.PORT || 8080;

var server = express();
var api = express.Router();

mongoose.connect('mongodb://localhost:27017/stvnrlnd_express_node_api');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// ------ Build the routes
api.route('/')
    .get(function(req, res) {
        res.json({
            "message": "Hello, beautiful!"
        });
    });

api.route('/users')
    .post(function(req, res) { // Create a new user
        var user = new User();
        user.name = req.body.name;
        user.save(function(err) {
            if (err){
                res.send(err);
            } else {
                res.json({ message: 'User created!' });
            }
        });
    })
    .get(function(req, res) { // Return all users
        User.find(function(err, users) {
            if (err){
                res.send(err);
            } else {
                res.json(users);
            }
        });
    });

server.use('/api', api);

// ------ Serve the public
server.listen(port, function() {
    console.log("Running on port", port);
});