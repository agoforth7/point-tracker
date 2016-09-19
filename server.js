var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var lowdb = require('lowdb');
var uuid = require('uuid');

var app = express();

app.use(bodyParser());
// app.use(cors());

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

// API routes go here

app.listen(process.env.PORT || 8000);