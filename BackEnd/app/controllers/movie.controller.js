const asyncHandler = require("../middleware/async");
const { makeResponse } = require("../helpers/make_response");
const {getMovieList, getMovieGenresList, searchMovie, getMovieById} = require("../services/movie.service")

exports.get_movie_list = asyncHandler(async (req, res) => {
  console.log("Movie")
    const moviesRes = await getMovieList()
    return makeResponse(res, 200, true, moviesRes, "Movie");
  });

  exports.get_genres_list = asyncHandler(async (req, res) => {
    const genresRes = await getMovieGenresList()
    return makeResponse(res, 200, true, genresRes, "Genres");
  });

  exports.search_movies = asyncHandler(async (req, res) => {
    const searchedMoviesRes = await searchMovie(req.query.query)
    return makeResponse(res, 200, true, searchedMoviesRes, "Movies");
  });

  exports.get_movie_by_Id = asyncHandler(async (req, res) => {
      const moviesRes = await getMovieById(req.params.movie_id)
      return makeResponse(res, 200, true, moviesRes, "Movie");
    });