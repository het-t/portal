"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create admin user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var createAdmin = function createAdmin(req, res) {
  var _req$body$params = req.body.params,
    firstName = _req$body$params.firstName,
    lastName = _req$body$params.lastName,
    gender = _req$body$params.gender,
    bithdate = _req$body$params.bithdate,
    email = _req$body$params.email,
    password = _req$body$params.password,
    orgId = _req$body$params.orgId;
  _bcrypt["default"].hash(password, 3).then(function (passwordHash) {
    return (0, _index["default"])("organizations_users_admin_create(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, orgId, firstName, lastName, gender, bithdate, email, passwordHash]);
  }).then(function () {
    res.sendStatus(200);
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
var _default = createAdmin;
exports["default"] = _default;