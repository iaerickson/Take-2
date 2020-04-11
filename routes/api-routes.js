var db = require('../models');
var express = require('express');
var router = express.Router();

//post route that takes the form on the recast list
//posts this data in a row in the new cast table
router.post('/api/recast', function (req, res) {
  console.log('api recast post route: ');
  console.log(req.body);
  db.Recast.create({
    movie: req.body.movie,
    //commenting out user for testing
    //user: req.body.user,
    user: 'User',
    role1: req.body.role1,
    role2: req.body.role2,
    role3: req.body.role3,
    role4: req.body.role4,
    actorForRole1: req.body.actorForRole1,
    actorForRole2: req.body.actorForRole2,
    actorForRole3: req.body.actorForRole3,
    actorForRole4: req.body.actorForRole4,
    description: '',
    thumbsUp: 0,
  })
    .then(function (dbRecast) {
      res.json(dbRecast);
      console.log(dbRecast);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

//Searches outside movie database
//Stores movie object into our db
//To be accessed for rendering recast page
router.post('/api/movies', function (req, res) {
  console.log('api/movies post route: ');
  console.log(req.body);
  db.Movie.create({
    title: req.body.title,
    role1: req.body.role1,
    role2: req.body.role2,
    role3: req.body.role3,
    role4: req.body.role4,
    actor1: req.body.actor1,
    actor2: req.body.actor2,
    actor3: req.body.actor3,
    actor4: req.body.actor4,
  })
    .then(function (dbMovie) {
      res.json(dbMovie);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

//Update route to increment the thumbs up when someone likes someone's recast
router.put('/api/thumbsup/:id', function (req, res) {
  db.Recast.increment('thumbsUp', {
    where: {
      id: req.params.id,
    },
  }).then(function (dbThumbsUp) {
    res.json(dbThumbsUp);
  });
});

//A get request when the user searches from the actor database and pulls the actor
router.get('/api/actors/:name', function (req, res) {
  console.log(req.params.name);
  db.Actor.findOne({
    where: {
      name: req.params.name,
    },
  }).then(function (dbActor) {
    res.json(dbActor);
  });
});

module.exports = router;
