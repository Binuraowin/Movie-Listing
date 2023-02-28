const axios = require("axios");
const { THE_MOVIE_DB_API_TOKEN } = require("../config/config");
// const logger = require("../helpers/logger");
// const Context = require("@arimac-spades/context").default;

exports.makeApiCall = async (url, method, body, stream = false) => {
  try {
    console.log(body)
    const options = body ? {
      method: method,
      headers: {
        Authorization: `Bearer ${THE_MOVIE_DB_API_TOKEN}`,
        "Content-Type" : "application/json;charset=utf-8",
      },
      url: url,
      data: body,
    } : {
        method: method,
        headers: {
          Authorization: `Bearer ${THE_MOVIE_DB_API_TOKEN}`,
          "Content-Type" : "application/json;charset=utf-8",
        },
        url: url
      }
    if (stream) options.responseType = 'stream';
    const response = await axios.default.request(options);
    return response.data;
  } catch (error) {
    console.log(`API-REQUEST-FAILED - error ${error}`)
    return error.response
      ? error.response.data
      : {
        status: 500,
        success: false,
        data: null,
        message: "Internal Server Error",
      };
  }
};
