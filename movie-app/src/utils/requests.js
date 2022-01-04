const API_KEY = 'k_w3m1sepa';
const API_ENDPOINTS = {
  getTopMovies: () =>
    `https://imdb-api.com/API/AdvancedSearch/${API_KEY}?groups=top_250`,
  getMovieByTitle: (title) =>
    `https://imdb-api.com/api/advancedsearch/${API_KEY}?title=${title}`,
};

function getTopIMDBMovies() {
  return new Promise((resolve, reject) => {
    axios
      .get(API_ENDPOINTS.getTopMovies())
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
      .get(API_ENDPOINTS.getMovieByTitle(title))
      .then(({ data }) => {
        resolve(data.results);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
