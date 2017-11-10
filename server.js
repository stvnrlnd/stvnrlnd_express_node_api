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

server.use('/api', api);

// ------ Serve the public
server.listen(port, function() {
    console.log("Running on port", port);
});