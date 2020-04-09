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
  var allRecastsObj = {};
  db.Recast.findAll({}).then(function (dbRecast) {
    console.log(dbRecast);
    allRecastsObj.recast = dbRecast;
    res.render('index', allRecastsObj);
  });
});

// router.get('/', function (req, res) {
//   var allRecastsInfo = {};
//   db.Recast.findAll({}).then(function (dbRecast) {
//     allRecastsInfo.recast = dbRecast;
//     allRecastsInfo.movie = [];
//     //find unique movies if not allowed
//     for (let i = 0; i < allRecastsInfo.recast.length; i++) {
//       let movTitle = allRecastsInfo.recast[i].dataValues.movie;
//       db.Movie.findOne({
//         where: { title: movTitle },
//       }).then(function (dbMovie) {
//         allRecastsInfo.movie.push(dbMovie);
//       });
//     }
//     res.render('index', allRecastsInfo);
//   });
// });

router.get('/:title', function (req, res) {
  var recastObj = {};
  db.Movie.findOne({
    where: { title: req.params.title },
  }).then(function (dbMovie) {
    recastObj.movie = dbMovie;
    console.log('movie pulled from database:');
    db.Actor.findAll({
      attributes: ['name'],
    }).then(function (dbActor) {
      recastObj.actor = dbActor;
      res.render('recast', recastObj);
    });
  });
});

//
module.exports = router;
