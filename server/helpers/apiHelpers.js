const axios = require("axios");
const API_KEY = require("../../config.js").API_KEY;

const getGenres = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
    .then(data => {
      return data.data.genres;
    });
};

const getMovies = genre_id => {
  return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&with_genres=${genre_id}&vote_count.gte=10`)
  .then(data =>{
      return data.data.results;
  });
};

module.exports.getGenres = getGenres;
module.exports.getMovies = getMovies;