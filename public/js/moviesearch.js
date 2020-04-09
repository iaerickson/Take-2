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
  //<a href ="/${movie.title}"></a>
  //potentially place after data-name
  function renderButtons(searchResults) {
    $('#buttons-view').empty();
    searchResults.forEach((movie) => {
      const html = `<button 
        id="${movie.id}" class="movie" 
        data-name="${movie.title}">
          ${movie.title}
        </button>`;
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
