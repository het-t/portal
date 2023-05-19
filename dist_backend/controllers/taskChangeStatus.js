"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var changeStatusTask = function changeStatusTask(req, res, next) {
  var _req$body$params = req.body.params,
    taskId = _req$body$params.taskId,
    statusId = _req$body$params.statusId;
  (0, _index["default"])("tasks_change_status(?, ?, ?)", [req.userId, taskId, statusId]).then(function () {
    return next();
  })["catch"](function (err) {
    res.sentStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 40,
    //activityId
    19,
    //tableid
    taskId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = changeStatusTask;
exports["default"] = _default;