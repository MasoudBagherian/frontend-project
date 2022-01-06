function MovieList({ movies, toggleShowModal, updateTrailerMovieID }) {
  return (
    <div className="inner-container">
      <div className="row movie__list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={movie.image}
            rate={movie.imDbRating}
            excerpt={movie.plot}
            title={movie.title}
            toggleShowModal={toggleShowModal}
            updateTrailerMovieID={updateTrailerMovieID}
          />
        ))}
      </div>
    </div>
  );
}
