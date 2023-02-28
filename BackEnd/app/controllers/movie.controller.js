const asyncHandler = require("../middleware/async");
const { makeResponse } = require("../helpers/make_response");
const {getMovieList} = require("../services/movie.service")

exports.get_movie_list = asyncHandler(async (req, res) => {
    const moviesRes = await getMovieList()
    return makeResponse(res, 200, true, moviesRes, "Movie");
  });