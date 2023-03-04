const { makeApiCall } = require("./index");
const config = require("../config/config");

const BASE_URL = config.PROCESS_ENV.MOVIE_LIST_BASE_URL || "https://api.themoviedb.org/3";


exports.getMovieList = async () => {
    const response = await makeApiCall(`${BASE_URL}/movie/550?api_key=${config.PROCESS_ENV.THE_MOVIE_DB_API_KEY}`, "GET", null);
    return response;
  };

  exports.getMovieGenresList = async () => {
    const response = await makeApiCall(`${BASE_URL}/genre/movie/list?api_key=${config.PROCESS_ENV.THE_MOVIE_DB_API_KEY}&language=en-US`, "GET", null);
    return response;
  };
  exports.searchMovie = async (data) => {
    const response = await makeApiCall(`${BASE_URL}/search/movie?api_key=${config.PROCESS_ENV.THE_MOVIE_DB_API_KEY}&page=1&include_adult=false&query=${data}`, "GET", null);
    return response;
  };

  exports.getMovieById = async (id) => {
    const response = await makeApiCall(`${BASE_URL}/movie/${id}?api_key=${config.PROCESS_ENV.THE_MOVIE_DB_API_KEY}&language=en-US`, "GET", null);
    return response;
  };