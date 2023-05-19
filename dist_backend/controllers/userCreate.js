"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * create user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var createUser = function createUser(req, res, next) {
  var _req$body$params = req.body.params,
    firstName = _req$body$params.firstName,
    lastName = _req$body$params.lastName,
    gender = _req$body$params.gender,
    bithdate = _req$body$params.bithdate,
    email = _req$body$params.email,
    role = _req$body$params.role,
    password = _req$body$params.password;
  _bcrypt["default"].hash(password, 3).then(function (passwordHash) {
    return (0, _index["default"])("users_create(?, ?, ?, ?, ?, ?, ?, ?, ?, @createdUserId)", [req.userId, req.orgId, firstName, lastName, gender, bithdate, email, role, passwordHash]);
  }).then(function (results) {
    var resKey = "userCreated";
    var resData = results[0].createdUserId;
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
    console.log(err);
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 4,
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
var _default = createUser;
exports["default"] = _default;