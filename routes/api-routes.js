var db = require('../models');
var express = require('express');
var router = express.Router();

//post route that takes the form on the recast list
//posts this data in a row in the new cast table
router.post('/api/recast', function (req, res) {
<<<<<<< HEAD
  console.log('api recast post route: ');
=======
  console.log('api/recast post route: ');
>>>>>>> master
  console.log(req.body);
  db.Recast.create({
    movie: req.body.movie,
    //commenting out user for testing
<<<<<<< HEAD
    //user: req.body.user,
    user: 'admin',
    role1: req.body.role1,
    role2: req.body.role2,
    role3: req.body.role3,
    role4: req.body.role4,
    actorForRole1: req.body.actorForRole1,
    actorForRole2: req.body.actorForRole2,
    actorForRole3: req.body.actorForRole3,
    actorForRole4: req.body.actorForRole4,
    description: '',
=======
    user: req.body.user,
    //user: "admin",
    actorRole1: req.body.actorRole1,
    actorRole2: req.body.actorRole2,
    actorRole3: req.body.actorRole3,
    actorRole4: req.body.actorRole4,
    description: req.body.description,
>>>>>>> master
    thumbsUp: 0,
  })
    .then(function (dbRecast) {
      //For testing purposes, after the form is posted, we will just render the form
      res.json(dbRecast);
      console.log(dbRecast);
      //res.redirect() to page saying recast was submitted
      //home page
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

//returns a boolean of whether or not the movie exists in the database
// router.get('/api/movies', function (req, res) {
//   console.log('api/movie get route:');
//   console.log(req.body);
//   db.Movie.count({
//     where: { title: req.body },
//   }).then((count) => {
//     if (count != 0) {
//       //movie appears in database
//       return true;
//     }
//     //movie is not in database
//     return false;
//   });
// });

//A get request when the user searches from the actor database and pulls the actor

router.get('/api/actors/:name', function (req, res) {
  console.log(req.params.name);
  db.Actor.findOne({
    where: {
      name: req.params.name,
    },
  }).then(function (dbActor) {
    //code to add the actor we just pulled to the db to the form
    res.json(dbActor);
    //Figure out how this route works with the search bar/suggested actors
    //just want to put the name from the
  });
});

//make a get request that gets everytime someone types something in
// //handled in handlebars to produce dynamically generated input list

//A get request when someone wants to view a user's recast list

//Create
//Read
//Update
//  Put Request
//  //thumbs up increment route
//finding the recast list by its id
//
// app.get('/api/recast/:id', function(req, res) {
//   db.NewCast.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(func);
// });
//
//method to render and pull all recasts

//Delete

module.exports = router;
