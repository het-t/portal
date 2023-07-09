"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRights;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get list of rights
 * from rights_master
 * @param {*} req 
 * @param {*} res 
 */

function getRights(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "rights_master_get_all(?)", [req.userId]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 9,
    //activityId
    6,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}