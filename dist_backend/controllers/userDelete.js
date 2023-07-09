"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteUser;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 */

function deleteUser(req, res) {
  var userIdToDel = req.params.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "users_delete(?, ?)", [req.userId, userIdToDel]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 8,
    //activityId
    15,
    //tableid
    userIdToDel,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}