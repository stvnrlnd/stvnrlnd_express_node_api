'use strict';

// ------ Require the packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// ------ Configure the application
var port = process.env.PORT || 8080;

var server = express();
var api = express.Router();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// ------ Build the routes


// ------ Serve the public
server.listen(port, function() {
    console.log("Running on port", port);
});