const express = require("express");
const UserController = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.get("/me", UserController.me);

module.exports = UserRouter;