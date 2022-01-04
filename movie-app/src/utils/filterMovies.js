function filterMovies(movies) {
  return movies.filter((item) => item.imDbRating && item.plot);
}
