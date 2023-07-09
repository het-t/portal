"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clientTypes;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get types of clients
 * @param {*} req 
 * @param {*} res 
 */

function clientTypes(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "clients_type_master_get(?)", [req.userId]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 15,
    //activityId
    3,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}