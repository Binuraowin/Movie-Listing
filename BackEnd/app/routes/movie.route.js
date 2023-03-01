const express = require("express");
const MovieController = require("../controllers/movie.controller");

const MovieRouter = express.Router();

MovieRouter.get("/", MovieController.get_movie_list);

module.exports = MovieRouter;