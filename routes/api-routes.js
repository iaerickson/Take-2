var db = require('../models');

module.exports = function(app) {
  app.post('/api/recast', function(req, res) {
    db.Newcast.create({
      //movie: req.body.movie,
      //user: req.body.user,
      //actor1: req.body.actor1,
      //actor2: req.body.actor1,
      //actor3: req.body.actor1,
      //actor4: req.body.actor1,
      //thumbs_up: 0;
    })
      .then(function() {
        //res.redirect() to page saying recast was submitted
        //home page
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
};
