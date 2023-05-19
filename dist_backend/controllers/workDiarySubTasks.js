"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = workDiarySubTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function workDiarySubTasks(req, res) {
  var _req$query = req.query,
    userId = _req$query.userId,
    taskId = _req$query.taskId,
    fromDate = _req$query.fromDate,
    toDate = _req$query.toDate;
  (0, _index["default"])("sub_tasks_users_sub_tasks(?, ?, ?, ?, ?)", [req.userId, userId, taskId, fromDate ? fromDate : null, toDate ? toDate : null]).then(function (subTasks) {
    return res.send(subTasks);
  })["catch"](function (err) {
    console.log(err);
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 42,
    //activityId
    21,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
}