//Old way of initializing server
//=============================
// var http = require('http');
// var fs = require('fs');
//=======================
var express = require('express');

//Set up our port

var PORT = process.env.PORT || 3000;

//Requring our models for syncing
var db = require('./models');

// Create our server (OLD)
// var server = http.createServer(handleRequest);

//Sets up Express App
var app = express();

//// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// OLD
// // Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {
//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + '/index.html', function(err, data) {
//     if (err) throw err;
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(data);
//   });
// }

//Routes
//======================================
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Starts our server
//removed "{ force: true }: from .sync() so it wouldn't drop tables
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});

// OLD WAY
// server.listen(PORT, function() {
//   console.log('Server is listening on PORT: ' + PORT);
// });
