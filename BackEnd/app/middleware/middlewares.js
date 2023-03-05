const jwt = require("jsonwebtoken");
const config = require("../config/config")
// const { getUserById } = require("../services/user.service");
const { makeResponse } = require("../helpers/make_response");


exports.checkToken = async (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }
    if (token) {
      jwt.verify(token, config.PROCESS_ENV.JWT_SECRET, (err, decoded) => {
        if (err) {
          return makeResponse(res, 401, false, null, "Not Authorized!");
        } else {
          console.log("autherized",decoded.id)
          next()
          // getUserById(decoded._id).then(async (response) => {
          //   if (response.success && response.data.is_active) {
          //     if (response.data.role.name === "super_admin") {
          //       req.user = response.data;
          //       next();
          //     } else {
          //       const reqPath = req.path;
          //       const routeKeys = Object.keys(routes[0]);
  
          //       const userPermissions = response.data.role.permissions;
          //       const routeFromJson = routeKeys.find((routeKey) => {
          //         let parser = new pathToRegex(routeKey);
          //         return parser.match(reqPath);
          //       });
          //       if (routeFromJson) {
          //         const route_permissions_from_json = routes[0][`${routeFromJson}`][`${req.method}`];
          //         if (!route_permissions_from_json) {
          //           return makeResponse(res, 404, false, null, "route_not_found!");
          //         }
          //         const route_permission = route_permissions_from_json.some((routePermission) => {
          //           return userPermissions.find(
          //             (permission) => permission.type.name == routePermission || routePermission == "all",
          //           );
          //         });
          //         if (route_permission) {
          //           req.user = response.data;
          //           next();
          //         } else {
          //           return makeResponse(res, 401, false, null, "Not Authorized!");
          //         }
          //       } else {
          //         return makeResponse(res, 401, false, null, "Not Authorized!");
          //       }
          //     }
          //   } else {
          //     return makeResponse(res, 401, false, null, "Not Authorized!");
          //   }
          // });
        }
      });
    } else {
      return makeResponse(res, 401, false, null, "Not Authorized!");
    }
  };