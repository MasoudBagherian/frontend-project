function MovieList({ movies }) {
  return (
    <div className="inner-container">
      <div className="row movie__list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            poster={movie.image}
            rate={movie.imDbRating}
            description={movie.plot}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
