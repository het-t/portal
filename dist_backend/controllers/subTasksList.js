"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSubTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get sub tasks of task
 * @param {*} req 
 * @param {*} res 
 */

function getSubTasks(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "sub_tasks_get_task_sub_tasks(?, ?)", [req.userId, req.params.id]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 19,
    //activityId
    20,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}