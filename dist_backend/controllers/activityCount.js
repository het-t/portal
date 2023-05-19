"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * get number of records in `user_activities` table
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var usersActivityCount = function usersActivityCount(req, res, next) {
  (0, _index["default"])("user_activities_count(?)", [req.userId]).then(function (results) {
    var resData = results[0].count;
    var resKey = 'count';
    if (_typeof(req === null || req === void 0 ? void 0 : req.logs) == "object") {
      req.logs.push({
        resData: resData,
        resKey: resKey
      });
    } else {
      req.logs = [{
        resData: resData,
        resKey: resKey
      }];
    }
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
    //activityId
    14,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = usersActivityCount;
exports["default"] = _default;