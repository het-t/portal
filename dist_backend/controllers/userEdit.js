"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = editUser;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit user
 * @param {*} req 
 * @param {*} res 
 */

function editUser(req, res) {
  var _req$body$params = req.body.params,
    userId = _req$body$params.userId,
    firstName = _req$body$params.firstName,
    lastName = _req$body$params.lastName,
    gender = _req$body$params.gender,
    birthdate = _req$body$params.birthdate,
    email = _req$body$params.email,
    role = _req$body$params.role;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "users_edit(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, userId, firstName, lastName, gender, birthdate, email, role]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 6,
    //activityId
    15,
    //tableid
    userIdToEdit,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}