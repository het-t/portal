"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var editUser = function editUser(req, res, next) {
  var _req$body$params = req.body.params,
    userId = _req$body$params.userId,
    firstName = _req$body$params.firstName,
    lastName = _req$body$params.lastName,
    gender = _req$body$params.gender,
    birthdate = _req$body$params.birthdate,
    email = _req$body$params.email,
    role = _req$body$params.role;
  (0, _index["default"])("users_edit(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, userId, firstName, lastName, gender, birthdate, email, role]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 6,
    //activityId
    15,
    //tableid
    userIdToEdit,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = editUser;
exports["default"] = _default;