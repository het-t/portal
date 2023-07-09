"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usersActivityCount;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get number of records in `user_activities` table
 * @param {*} req 
 * @param {*} res 
 */

function usersActivityCount(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "user_activities_count(?)", [req.userId]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
    //activityId
    14,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}