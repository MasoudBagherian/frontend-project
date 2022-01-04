function SearchBox({
  updateMovies,
  updateLoading,
  updateError,
  searchInputDisabled,
}) {
  const [searchedTitle, setSearchedTitle] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (searchedTitle.trim() === '') {
      setSearchedTitle('');
      return;
    }
    updateLoading(true);
    updateError(false);
    getMovieByTitle(searchedTitle)
      .then((allMovies) => {
        const searchedMovies = filterMovies(allMovies);
        updateMovies(searchedMovies);
        updateLoading(false);
      })

      .catch((err) => {
        updateLoading(false);
        updateError(true);
        console.log(err.message);
      });
  }
  function handleChangeSearchedTitle(e) {
    const searchedMovieTitle = e.target.value;
    setSearchedTitle(searchedMovieTitle);
  }
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="search movie"
        value={searchedTitle}
        onChange={handleChangeSearchedTitle}
        disabled={searchInputDisabled}
      />
    </form>
  );
}
