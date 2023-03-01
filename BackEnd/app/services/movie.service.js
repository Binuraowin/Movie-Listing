const { makeApiCall } = require("./index");
const config = require("../config/config");

const BASE_URL = config.PROCESS_ENV.MOVIE_LIST_BASE_URL || "https://api.themoviedb.org/3/movie/550?api_key=15b8f6ec34e28af45b57bd1486d4645b";

exports.getMovieList = async () => {
    const response = await makeApiCall(BASE_URL, "GET", null);
    return response;
  };