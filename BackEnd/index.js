const express = require("express");
const APIRouter = require("./app/routes/api.route");

const app = express()

app.use(
    "/api/movie-list",
    (req, res, next) => 
    // {
    //   const nonSecurePaths = ["/status"];
    //   if (nonSecurePaths.includes(req.path)) {
    //     return next();
    //   }
    //   checkToken(req, res, next);
    // },
    APIRouter,
  );

  app.use("/api/test",(req,res) =>{
    console.log("Testing")
  })

app.listen(3001, () => {
    console.log(`app is running on port 3001`);
  });