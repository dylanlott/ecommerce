// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');

// Controllers 
// var UserCtrl = require('./server-controllers/UserCtrl'); 

// Express
var app = express();

// Middleware
app.use(express.static(__dirname+'/public')); 
app.use(bodyParser.json());
app.use(cors());

//Passport Middleware
//TODO: Add passport middleware, secret, and Strategy

// ### Endpoints ### ///
//Products
// app.post('/Product', ProductCtrl.create);
// app.get('/Product', ProductCtrl.read);
// app.put('/Product/:id', ProductCtrl.update);
// app.delete('/Product/:id', ProductCtrl.delete);

//Users
// app.post('/user', userCtrl.create);
// app.get('/user', userCtrl.read);
// app.put('/user/:id', userCtrl.update);
// app.delete('/user/:id', userCtrl.delete);

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