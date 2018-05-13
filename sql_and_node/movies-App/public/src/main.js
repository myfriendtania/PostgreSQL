document.addEventListener('DOMContentLoaded', () => {
  function addMoviesToPage(res) {
    res.data.forEach((movie) => {
      $('.movie-container').append($('<h2>').addClass('movie').text(movie.title).attr('data-id', movie.id));
    });
    $('.movie').each((index, elem) => {
      const id = $(elem).attr('data-id');
      $(elem).on('click', () => getInfo(id));
    })
  }

  function getInfo(id) {
    $.ajax({
      url: `/movies/${id}`,
      success: (res) => addInfoToPage(res),
      error: (err) => console.log(err),
    });
  }

  function addInfoToPage(res) {
    const $container = $('.info-container');
    $container.html(' ');
    $container.append($('<h3>').addClass('title').text(res.data.title));
    $container.append($('<span>').addClass('release-year').text(res.data.year));
  }

  $.ajax({
    url: '/movies',
    success: (res) => addMoviesToPage(res),
    error: (err) => console.log(err),
  });

})