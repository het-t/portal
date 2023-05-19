"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * change status of sub task of task assigened to user
 * @param {*} req 
 * @param {*} res 
 */

var myTasksChangeStatus = function myTasksChangeStatus(req, res, next) {
  var _req$query = req.query,
    taskId = _req$query.taskId,
    subTaskId = _req$query.subTaskId,
    statusId = _req$query.statusId,
    cost = _req$query.cost,
    costSaved = _req$query.costSaved;
  if (costSaved == 1 && cost == undefined) cost = null;
  taskId = parseInt(taskId, 10);
  subTaskId = parseInt(subTaskId, 10);
  if (costSaved == 0) {
    (0, _index["default"])("sub_tasks_set_cost(?, ?, ?)", [req.userId, subTaskId, cost])["catch"](function (err) {
      (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 41,
      //activityId
      20,
      //tableid
      subTaskId,
      //tablePkId
      [err] //details
      ])["catch"](function (err) {
        return console.log(err);
      });
    });
  }
  (0, _index["default"])("sub_tasks_change_status(?, ?, ?, ?)", [req.userId, taskId, subTaskId, statusId]).then(function () {
    return next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 34,
    //activityId
    19,
    //tableid
    subTaskId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = myTasksChangeStatus;
exports["default"] = _default;