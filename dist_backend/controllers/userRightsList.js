"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * get rights of user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var userRights = function userRights(req, res, next) {
  (0, _index["default"])("rights_master_get_user_rights(?)", [req.userId]).then(function (rights) {
    var resKey = "userRights";
    var resData = rights;
    if (_typeof(req === null || req === void 0 ? void 0 : req.logs) == "object") {
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
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 6,
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
var _default = userRights;
exports["default"] = _default;