function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  function updateLoading(loading) {
    setIsLoading(loading);
  }
  function updateError(error) {
    setIsError(error);
  }
  function updateMovies(newMovies) {
    setMovies(newMovies);
  }

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getTopIMDBMovies()
      .then((allMovies) => {
        const searchedMovies = filterMovies(allMovies);
        updateMovies(searchedMovies);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err.message);
      });
  }, []);
  let movieList = <Loader />;
  // fetching data finished
  if (!isLoading) {
    if (isError) {
      // fetching data failed
      movieList = (
        <Alert
          type="error"
          message="There is something wrong with server. Fetching data failed!"
        />
      );
    } else if (!movies.length) {
      // no movies found
      movieList = <Alert type="warning" message="No movies found!" />;
    } else {
      movieList = <MovieList movies={movies} />;
    }
  }
  return (
    <>
      <Header
        updateMovies={updateMovies}
        updateLoading={updateLoading}
        updateError={updateError}
        searchInputDisabled={isLoading}
      />
      <main className="main">{movieList}</main>
    </>
  );
}