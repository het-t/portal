"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = editRole;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 */

function editRole(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "roles_edit(?, ?, ?, ?)", [req.userId, req.params.id, req.body.params.roleName, JSON.stringify(req.body.params.roleRights)]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 5,
    //activityId
    8,
    //tableid
    req.query.editRoleId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}