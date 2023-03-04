const asyncHandler = require("../middleware/async");
const typeorm = require("typeorm")
const { makeResponse } = require("../helpers/make_response");

let dataSource = new typeorm.DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "movielister",
  synchronize: true,
  entities: [require("../models/user.model")],
})

exports.me = asyncHandler(async (req, res) => {
    console.log("response")
    // res.status(200).send({name:"hi"})
  });

exports.createUser = asyncHandler(async (req, res) => {
dataSource
    .initialize()
    .then(function () {
        let Users = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email:req.body.email,
          password:req.body.password
        }
        console.log(Users)

        var UsersRepository = dataSource.getRepository("Users")
        UsersRepository
            .save(Users)
            .then(function (savedUsers) {
              return makeResponse(res, 200, true, savedUsers, "User Created successfully");
            })
    })
    .catch(function (error) {
        console.log("Error: ", error)
        return makeResponse(res, 409, true, "", "User Create false");
    })
  });

  exports.signUp = asyncHandler(async (req, res) => {
    dataSource
        .initialize()
        .then(function () {
    
            var UsersRepository = dataSource.getRepository("Users")
            UsersRepository
                .findOneBy({email:req.body.email,password:req.body.password})
                .then(function (fetchedUsers) {
                  return makeResponse(res, 200, true, fetchedUsers, "User fetched successfully");
                })
        })
        .catch(function (error) {
            console.log("Error: ", error)
            return makeResponse(res, 409, true, "", "User fetched false");
        })
      });