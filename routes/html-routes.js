//Dependencies
//var path = require('path');
var express = require('express');
var router = express.Router();

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads our index.html (no handlebars)
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

router.get('/', function (req, res) {
  res.render('index');
});

//
module.exports = router;
