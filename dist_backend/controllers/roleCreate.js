"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRole;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create role
 * @param {*} req 
 * @param {*} res 
 */

function createRole(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'roles_create(?, ?, ?, ?)', [req.userId, req.orgId, req.body.params.roleName, JSON.stringify(req.body.params.roleRights)]).then(function (results) {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 3,
    //activityId
    8,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}