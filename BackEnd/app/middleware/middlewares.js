const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
// const { getUserById } = require("../services/user.service");
const { makeResponse } = require("../helpers/make_response");


exports.checkToken = async (req, res, next) => {
    console.log("middleware")
    next()
  };