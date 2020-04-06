$(document).ready(function () {
  $('#movieSearch').on('submit', function (event) {
    event.preventDefault();
    let movie = $('[name=movie]').val().trim();
    movie = queryFormatter(movie);

    var queryURL =
      'https://api.themoviedb.org/3/movie/550?api_key=b4cf32bed876d97cc4ef65987205c624';
    var queryURL2 =
      'https://api.themoviedb.org/3/movie/550/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
    var queryURL3 =
      'https://api.themoviedb.org/3/search/movie?api_key=b4cf32bed876d97cc4ef65987205c624&query=' +
      movie;

    $.ajax({
      url: queryURL3,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      var searchResults = [];
      searchResults.push(response.results[0].title);
      searchResults.push(response.results[1].title);
      searchResults.push(response.results[2].title);
      renderButtons(searchResults);

      //on click for response
      //userpick must be assigned when client confirms which movie was correct one, currently its hardcoded
      // const userpick = response.results[0].id;
      // getID(userpick);
    });

    function renderButtons(searchResults) {
      $('#buttons-view').empty();
      for (var i = 0; i < searchResults.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button type = 'submit' id='chosen'>");
        // Adding a class
        a.addClass('movie');
        // Adding a data-attribute with a value of the movie at index i
        a.attr('data-name', searchResults[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(searchResults[i]);
        // Adding the button to the HTML
        $('#buttons-view').append(a);
      }
    }

    //$("#chosen").on("submit", function(event){
    //
    // function getID(userpick) {
    //   var queryURL2 =
    //     'https://api.themoviedb.org/3/movie/' +
    //     userpick +
    //     '/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
    //   //this data gets sent with movie to be generated next to the form
    //   $.ajax({ url: queryURL2, method: 'GET' }).then(function (credits) {
    //     console.log(credits);
    //     var role1 = credits.cast[0].character;
    //     var actor1 = credits.cast[0].name;
    //     console.log(role1);
    //     console.log(actor1);

    //     var role2 = credits.cast[1].character;
    //     var actor2 = credits.cast[1].name;
    //     console.log(role2);
    //     console.log(actor2);

    //     var role3 = credits.cast[2].character;
    //     var actor3 = credits.cast[2].name;
    //     console.log(role3);
    //     console.log(actor3);

    //     var role4 = credits.cast[3].character;
    //     var actor4 = credits.cast[3].name;
    //     console.log(role4);
    //     console.log(actor4);
    //   });
    // }
  });

  //function that will run to make the search-term palatable for query search
  function queryFormatter(movieTitle) {
    let formatted = movieTitle.trim();
    formatted = formatted.split(' ').join('+');
    return formatted;
  }
});
