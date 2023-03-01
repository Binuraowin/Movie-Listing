const asyncHandler = require("../middleware/async");

exports.me = asyncHandler(async (req, res) => {
    console.log("response")
    // res.status(200).send({name:"hi"})
  });