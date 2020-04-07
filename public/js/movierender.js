//might be able to implement this with browserfy
//var db = require('../../models');

//Listens for when a "movie button" is clicked
//Captures the id and name of the movie to make ajax call
//data captured from ajax call is posted in Movie Table
//html is called to bring us to the movie page

$(document).on('click', '.movie', function (event) {
  var userPick = this.id;
  var movTitle = $(this).data('name');
  console.log(movTitle);

  var queryURL2 =
    'https://api.themoviedb.org/3/movie/' +
    userPick +
    '/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
  console.log(queryURL2);
  $.ajax({
    url: queryURL2,
    method: 'GET',
  }).then(function (credits) {
    var movieObj = {
      title: movTitle,
      role1: credits.cast[0].character,
      role2: credits.cast[1].character,
      role3: credits.cast[2].character,
      role4: credits.cast[3].character,
      actor1: credits.cast[0].name,
      actor2: credits.cast[1].name,
      actor3: credits.cast[2].name,
      actor4: credits.cast[3].name,
    };
    $.ajax('api/movies', {
      type: 'POST',
      data: movieObj,
    }).then(function () {
      window.location = `/${movTitle}`;
    });
  });
});

//This will work if we can require db here (browserfy)
//will return true if the movie exists in the database
//
// function isNewMovie(movTitle) {
//   db.Movie.count({
//     where: { title: movTitle },
//   }).then((count) => {
//     if (count != 0) {
//       //movie appears in database
//       return false;
//     }
//     //movie is not in database
//     return true;
//   });
// }

function isNewMovie(movTitle) {
  $.ajax('api/movies', {
    type: 'GET',
    data: movTitle,
  }).then(function (result) {
    //result will be a boolean
    return result;
  });
}
