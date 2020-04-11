//Listens to the the search button on the index page
//On submit, it captures the input, gets it query-ready and calls the api
$(document).ready(function () {
  $('#movieSearch').on('submit', function (event) {
    event.preventDefault();
    let movie = $('[name=movie]').val().trim();
    movie = queryFormatter(movie);

    var queryURL3 =
      'https://api.themoviedb.org/3/search/movie?api_key=b4cf32bed876d97cc4ef65987205c624&query=' +
      movie;

    //Searches their database for 3 movies closest to user's search
    //Captures id, movie poster, and title
    //renders buttons for user to select
    $.ajax({
      url: queryURL3,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      var searchResults = response.results
        .filter((movie, index) => index < 3)
        .map((movie) => {
          return {
            id: movie.id,
            img: movie.poster_path,
            title: movie.title,
          };
        });
      renderButtons(searchResults);
    });
  });

  //Creates 3 buttons that the user can select to confirm which movie
  //Movie posters are rendered for reference
  function renderButtons(searchResults) {
    $('#results-header').empty();
    $('#buttons-view').empty();
    const htmlHD = `<h2>Results:</h2>`;
    $('#results-header').append(htmlHD);
    searchResults.forEach((movie) => {
      var posterURL = `https://image.tmdb.org/t/p/w154${movie.img}`;
      const html = `<div class="movie-wrap">
           <button id="${movie.id}" class="movie" data-name="${movie.title}">
          ${movie.title} </button>
        <img src=${posterURL}>
        </div>
        <br>`;
      $('#buttons-view').append(html);
    });
  }

  //function that will run to make the search-term palatable for query search
  function queryFormatter(movieTitle) {
    let formatted = movieTitle.trim();
    formatted = formatted.split(' ').join('+');
    return formatted;
  }
});
