"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = myTasksChangeStatus;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * change status of sub task of task assigened to user
 * @param {*} req 
 * @param {*} res 
 */

function myTasksChangeStatus(req, res) {
  var taskId = req.params.taskId;
  var _req$body = req.body,
    subTaskId = _req$body.subTaskId,
    statusId = _req$body.statusId,
    cost = _req$body.cost,
    costSaved = _req$body.costSaved;
  if (costSaved == 1 && cost == undefined) cost = null;
  subTaskId = parseInt(subTaskId, 10);
  var connection = (0, _conDb["default"])();
  if (costSaved == 0) {
    (0, _index["default"])(connection, "sub_tasks_set_cost(?, ?, ?)", [req.userId, subTaskId, cost])["catch"](function (err) {
      (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 41,
      //activityId
      20,
      //tableid
      subTaskId,
      //tablePkId
      [err] //details
      ]);
    });
  }

  (0, _index["default"])(connection, "sub_tasks_change_status(?, ?, ?, ?, ?)", [req.userId, req.orgId, taskId, subTaskId, statusId]).then(function () {
    return (0, _index["default"])(connection, "tasks_auto_assign_status(?, ?, ?)", [req.userId, req.orgId, taskId]);
  }).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 34,
    //activityId
    19,
    //tableid
    subTaskId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}