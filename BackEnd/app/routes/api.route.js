const express = require("express");
const UserRouter = require("./user.route");

const UserAPIRouter = express.Router();

UserAPIRouter.use("/users", UserRouter);

module.exports = UserAPIRouter;
