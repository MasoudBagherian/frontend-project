function Movie({ poster, title, rate, description }) {
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
        <div className="movie__description">{description}</div>
      </div>
    </div>
  );
}
