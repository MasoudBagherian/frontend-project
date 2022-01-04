function Header({
  updateMovies,
  updateLoading,
  updateError,
  searchInputDisabled,
}) {
  return (
    <header className="header">
      <div className="header__body inner-container">
        <Logo />
        <SearchBox
          updateMovies={updateMovies}
          updateLoading={updateLoading}
          updateError={updateError}
          searchInputDisabled={searchInputDisabled}
        />
      </div>
    </header>
  );
}
