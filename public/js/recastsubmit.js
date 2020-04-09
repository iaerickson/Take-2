$(document).on('click', '#recast', function (event) {
  event.preventDefault();
  var movTitle = $('#recast-movie-title').text().trim();
  var recast = { movie: movTitle };

  $('.form-control').each(
    (key, elem) => (recast[elem.id] = elem.value || elem.innerHTML)
  );
  console.log(recast);
  $.ajax('/api/recast', {
    type: 'POST',
    data: recast,
  }).then(function () {
    console.log('created new Movie entry');
    window.location = '/';
  });
});
