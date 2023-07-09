"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = workDiarySubTasks;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function workDiarySubTasks(req, res) {
  var _req$params = req.params,
    userId = _req$params.userId,
    taskId = _req$params.taskId;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "sub_tasks_users_sub_tasks(?, ?, ?, ?, ?)", [req.userId, userId, taskId, filters.datefrom, filters.dateto]).then(function (results) {
    return res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 42,
    //activityId
    21,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}