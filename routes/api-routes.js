var db = require('../models');

module.exports = function(app) {
  //post route that takes the form on the recast list
  //posts this data in a row in the new cast table
  app.post('/api/recast', function(req, res) {
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
      thumbs_up: 0
    })
      .then(function(dbNewCast) {
        //For testing purposes, after the form is posted, we will just render the form
        res.json(dbNewCast);
        console.log(dbNewCast);
        //res.redirect() to page saying recast was submitted
        //home page
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  //A get request when the user searches from the actor database
  //and populate the actor recast field
  //:::Migh need to reformat the where name: req.body
  //

  // app.get('/api/actors/:name', function(req, res) {
  //   console.log(req.body);
  //   db.Actor.findOne({
  //     where: {
  //       name: req.body
  //     }
  //   }).then(function(dbActor) {
  //     //code to add the actor we just pulled to the db to the form
  //     //res.json(dbActor);
  //     //Figure out how this route works with the search bar/suggested actors
  //   });
  // });

  //A get request when someone wants to view a user's recast list

  //Create
  //Read
  //Update
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

  //Delete
};
