const API_KEY = 'k_d9n768fm';
const API_ENDPOINTS = {
  topMovies: () =>
    `https://imdb-api.com/API/AdvancedSearch/${API_KEY}?groups=top_250`,
  movieByTitle: (title) =>
    `https://imdb-api.com/api/advancedsearch/${API_KEY}?title=${title}`,
  movieTrailer: (movieID) =>
    `https://imdb-api.com/en/API/YouTubeTrailer/${API_KEY}/${movieID}`,
};

function getTopIMDBMovies() {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINTS.topMovies())
      .then(({ data }) => {
        resolve(data.results);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
function getMovieByTitle(title) {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINTS.movieByTitle(title))
      .then(({ data }) => {
        resolve(data.results);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
function getMovieTrailer(movieID) {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINTS.movieTrailer(movieID))
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
