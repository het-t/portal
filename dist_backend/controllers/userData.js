"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get user data to show in edit user screen
 * @param {*} req 
 * @param {*} res 
 */

var getEditUser = function getEditUser(req, res, next) {
  (0, _index["default"])("users_user_data(?, ?)", [req.userId, req.query.editUserId]).then(function (userData) {
    var resKey = "userData";
    var resData = userData[0];
    if (typeof (req === null || req === void 0 ? void 0 : req.logs) == "Object") {
      req.logs.push({
        resKey: resKey,
        resData: resData
      });
    } else {
      req.logs = [{
        resKey: resKey,
        resData: resData
      }];
    }
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 25,
    //activityId
    15,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = getEditUser;
exports["default"] = _default;