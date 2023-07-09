"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteTask;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete task
 * @param {*} req 
 * @param {*} res 
 */

function deleteTask(req, res, next) {
  var taskId = req.params.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_delete(?, ?)", [req.userId, taskId]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 32,
    //activityId
    19,
    //tableid
    taskId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}