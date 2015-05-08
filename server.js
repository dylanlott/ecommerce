// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Endpoints 


// Connections
var port = 9001;
var mongoUri = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});