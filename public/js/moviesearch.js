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

  function renderButtons(searchResults) {
    $('#buttons-view').empty();
    searchResults.forEach((movie) => {
      const html = `<button 
        id="${movie.id}" class="movie" 
        data-name="${movie.title}">
        <a href ="/${movie.title}"></a>      
          ${movie.title}
        </button>`;

      $('#buttons-view').append(html);
    });
  }

  // $(document).on('click', '.movie', function (event) {
  //   var userPick = this.id;
  //   var movTitle = $(this).data('name');
  //   console.log(movTitle);

  //   var queryURL2 =
  //     'https://api.themoviedb.org/3/movie/' +
  //     userPick +
  //     '/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
  //   console.log(queryURL2);
  //   $.ajax({
  //     url: queryURL2,
  //     method: 'GET',
  //   }).then(function (credits) {
  //     var newMovie = {
  //       title: movTitle,
  //       role1: credits.cast[0].character,
  //       role2: credits.cast[1].character,
  //       role3: credits.cast[2].character,
  //       role4: credits.cast[3].character,
  //       actor1: credits.cast[0].name,
  //       actor2: credits.cast[1].name,
  //       actor3: credits.cast[2].name,
  //       actor4: credits.cast[3].name,
  //     };
  //     $.ajax('/api/movies', {
  //       type: 'POST',
  //       data: newMovie,
  //     }).then(function () {
  //       console.log('created new Movie entry');
  //       window.location = `/${movTitle}`;
  //     });
  //   });
  // });

  //function that will run to make the search-term palatable for query search
  function queryFormatter(movieTitle) {
    let formatted = movieTitle.trim();
    formatted = formatted.split(' ').join('+');
    return formatted;
  }
});
