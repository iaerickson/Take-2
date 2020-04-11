//Dependencies
//var path = require('path');
var express = require('express');
var router = express.Router();
var db = require('../models');

// Each of the below routes just handles the HTML page that the user gets sent to.

//Index route loads all recasts
//Loads them in order of must thumbs up to least
router.get('/', function (req, res) {
  var allRecastsObj = {};
  db.Recast.findAll({
    order: [['thumbsUp', 'DESC']],
  }).then(function (dbRecast) {
    console.log(dbRecast);
    allRecastsObj.recast = dbRecast;
    res.render('index', allRecastsObj);
  });
});

//When we select a movie we want to recast,
//Loads movie info to table along with all actors to choose from in actor db
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
