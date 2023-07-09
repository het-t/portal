"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = myTasksCount;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get number of tasks assigned to user
 * @param {*} req 
 * @param {*} res 
 */

function myTasksCount(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "my_tasks_count(?)", [req.userId]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 33,
    //activityId
    19,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}