"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = changeStatusTask;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function changeStatusTask(req, res) {
  var taskId = req.params.id;
  var statusId = req.body.statusId;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_change_status(?, ?, ?)", [req.userId, taskId, statusId]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sentStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 40,
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