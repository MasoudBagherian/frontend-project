function setRatingColor(ratingValue) {
  let ratingColor = 'lightgreen';
  if (ratingValue < 7) {
    ratingColor = 'orange';
  }
  if (ratingValue < 5) {
    ratingColor = 'red';
  }
  return ratingColor;
}
function Movie({
  id,
  poster,
  title,
  rate,
  excerpt,
  toggleShowModal,
  updateTrailerMovieID,
}) {
  function showTrailer() {
    getMovieTrailer(id).then((trailerInfo) => {
      const trailerUrl = trailerInfo.videoUrl;
      const trailerID = getTrailerID(trailerUrl);
      updateTrailerMovieID(trailerID);
      toggleShowModal();
    });
  }
  return (
    <div className="movie__wrapper col col-md-6 col-lg-4">
      <div className="movie">
        <div className="movie__poster">
          <img src={poster} alt="" />
        </div>
        <div className="movie__info">
          <h3 className="movie__title">{title}</h3>
          <p
            className="movie__rate"
            style={{
              color: setRatingColor(+rate),
            }}>
            {rate}
          </p>
        </div>
        <div className="movie__description">
          <p className="movie__excerpt">{excerpt}</p>
          <button onClick={showTrailer} className="movie__btn">
            show trailer
          </button>
        </div>
      </div>
    </div>
  );
}
