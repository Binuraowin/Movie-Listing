const express = require("express");
const APIRouter = require("./app/routes/api.route");
const { checkToken } = require("./app/middleware/middlewares");
const config = require("./app/config/config")
require("dotenv").config({path: __dirname + '/.env'});

const PORT = process.env.PORT || 3005;
const app = express()
// // console.log(process.env)
// console.log(config.PROCESS_ENV.JWT_SECRET)

app.use(
  "/api/movie-list",
  (req, res, next) =>
    {
      const nonSecurePaths = ["/status"];
      if (nonSecurePaths.includes(req.path)) {
        return next();
      }
      checkToken(req, res, next);
    },
    APIRouter,
);


app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});