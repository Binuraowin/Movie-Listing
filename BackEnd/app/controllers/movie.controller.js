const asyncHandler = require("../middleware/async");

exports.get_movie_list = asyncHandler(async (req, res) => {
    console.log("movie response")
    // res.status(200).send({name:"hi"})
  });