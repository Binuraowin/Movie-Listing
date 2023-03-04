const express = require("express");
const { checkToken } = require("./app/middleware/middlewares");
var typeorm = require("typeorm")
const config = require("./app/config/config")
const APIRouter = require("./app/routes/api.route");
require("dotenv").config({path: __dirname + '/.env'});
const cors = require("cors");
// const {dataSource} = require('./app/config/mongodbConfig')


const PORT = process.env.PORT || 3005;
const app = express()
// // console.log(process.env)
// console.log(config.PROCESS_ENV.JWT_SECRET)

app.use(express.json());

app.use(cors());

// let dataSource = new typeorm.DataSource({
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "",
//   database: "movielister",
//   synchronize: true,
//   entities: [require("./app/models/user.model")],
//   keepConnectionAlive : true
// })

// dataSource
//     .initialize()
//     .then(function () {
//       console.log("DataBase Initialization Success")
//     })
//     .catch(function (error) {
//         console.log("Error: ", error)
//     })

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