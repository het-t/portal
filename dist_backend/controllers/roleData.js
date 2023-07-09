"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRoleData;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get role data
 * @param {*} req 
 * @param {*} res 
 */

function getRoleData(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "roles_role_data(?, ?)", [req.userId, req.params.id]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 22,
    //activityId
    8,
    //tableid
    req.params.id,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}