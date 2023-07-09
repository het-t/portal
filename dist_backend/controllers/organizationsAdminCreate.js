"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createAdmin;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create admin user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function createAdmin(req, res) {
  var _req$body$params = req.body.params,
    firstName = _req$body$params.firstName,
    lastName = _req$body$params.lastName,
    gender = _req$body$params.gender,
    bithdate = _req$body$params.bithdate,
    email = _req$body$params.email,
    password = _req$body$params.password,
    orgId = _req$body$params.orgId;
  var connection = (0, _conDb["default"])();
  _bcrypt["default"].hash(password, 3).then(function (passwordHash) {
    return (0, _index["default"])(connection, "organizations_users_admin_create(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, orgId, firstName, lastName, gender, bithdate, email, passwordHash]);
  }).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 4,
    //activityId
    15,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}