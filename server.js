//Requiring express and handlebars to set up the server and run the html
//
var express = require('express');
var exphbs = require('express-handlebars');

//Setting up our port
var PORT = process.env.PORT || 3000;

//Requiring our models for syncing
var db = require('./models');

//Sets up Express App
var app = express();

//// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));

//Routes
//======================================
var htmlRoutes = require('./routes/html-routes.js');
var apiRoutes = require('./routes/api-routes.js');

app.use(htmlRoutes);
app.use(apiRoutes);

// Starts our server
//removed "{ force: true }: from .sync() so it wouldn't drop tables
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
