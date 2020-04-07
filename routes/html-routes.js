//Dependencies
//var path = require('path');
var express = require('express');
var router = express.Router();
var db = require('../models');

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads our index.html (no handlebars)
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/:title', function (req, res) {
  db.Movie.findOne({
    where: { title: req.params.title },
  }).then(function (dbMovie) {
    console.log('/:title route');
    console.log('movie pulled from database:');
    console.log(dbMovie.dataValues);
    res.render('recast', dbMovie);
  });
});

//
module.exports = router;
