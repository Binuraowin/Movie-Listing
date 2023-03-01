const asyncHandler = require("../middleware/async");
const { makeResponse } = require("../helpers/make_response");
const {getMovieList, getMovieGenresList} = require("../services/movie.service")

exports.get_movie_list = asyncHandler(async (req, res) => {
  console.log("Movie")
    const moviesRes = await getMovieList()
    return makeResponse(res, 200, true, moviesRes, "Movie");
  });

  exports.get_genres_list = asyncHandler(async (req, res) => {
    const genresRes = await getMovieGenresList()
    return makeResponse(res, 200, true, genresRes, "Genres");
  });