const express = require("express");
const MovieController = require("../controllers/movie.controller");

const MovieRouter = express.Router();

MovieRouter.get("/", MovieController.get_movie_list);
MovieRouter.get("/get_genres", MovieController.get_genres_list);
MovieRouter.get("/searchMovies", MovieController.search_movies);
MovieRouter.get("/get_movie_by_id/:movie_id", MovieController.get_movie_by_Id);

module.exports = MovieRouter;