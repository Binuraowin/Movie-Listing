const asyncHandler = require("../middleware/async");
const { makeResponse } = require("../helpers/make_response");

exports.get_movie_list = asyncHandler(async (req, res) => {
    console.log("movie response")
    return makeResponse(res, 200, true, {name:"movie"}, "Movie");
    // res.status(200).send({name:"hi"})
  });