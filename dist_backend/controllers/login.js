"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var login = function login(req, res, next) {
  var _req$body = req.body,
    password = _req$body.password,
    email = _req$body.email,
    remember = _req$body.remember;
  var resKey = 'login';
  var resData = '';
  var userId = null;
  var orgId = null;
  var expiresIn = '';
  if (remember) expiresIn = '30d';else expiresIn = '4h';

  //find users     
  //get hash from database
  (0, _index["default"])("users_login(?)", [email])
  //if no user exist throw err
  .then(function (user) {
    if (user.length == 0) {
      resData = "user not found";
      throw "user not found";
    } else {
      userId = user[0].userId;
      orgId = user[0].orgId;
      return user;
    }
  })
  //compare it with input password
  .then(function (user) {
    return _bcrypt["default"].compare(password, user[0].password);
  })
  //jwt
  .then(function (verified) {
    if (verified == true) {
      resData = 1;
    } else {
      throw "password not matching";
    }
  }).then(function () {
    _jsonwebtoken["default"].sign({
      userId: userId,
      orgId: orgId
    }, 'secert', {
      expiresIn: expiresIn
    }, function (err, token) {
      if (err) {
        throw err;
      } else {
        res.cookie('_token', token, {
          signed: true
        });
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
      }
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    console.log(err);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [null, 1,
    //activityId
    15,
    //tableid
    null,
    //tablePkId
    email + ' ' + err //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = login;
exports["default"] = _default;