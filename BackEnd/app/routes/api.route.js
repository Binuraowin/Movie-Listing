const express = require("express");
const UserRouter = require("./user.route");
const MovieRouter = require("./movie.route");

const APIRouter = express.Router();

APIRouter.use("/users",UserRouter);
APIRouter.use("/movies",MovieRouter);

module.exports = APIRouter;
