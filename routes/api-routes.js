var db = require('../models');
var express = require('express');
var router = express.Router();

//post route that takes the form on the recast list
//posts this data in a row in the new cast table
router.post('/api/recast', function (req, res) {
  console.log(req.body);
  db.NewCast.create({
    movie: req.body.movie,
    //commenting out user for testing
    user: req.body.user,
    //user: "admin",
    actorRole1: req.body.actorRole1,
    actorRole2: req.body.actorRole2,
    actorRole3: req.body.actorRole3,
    actorRole4: req.body.actorRole4,
    thumbsUp: 0,
  })
    .then(function (dbNewCast) {
      //For testing purposes, after the form is posted, we will just render the form
      res.json(dbNewCast);
      console.log(dbNewCast);
      //res.redirect() to page saying recast was submitted
      //home page
    })
    .catch(function (err) {
      res.status(401).json(err);
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
