"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var deleteTask = function deleteTask(req, res, next) {
  var taskId = req.body.params.taskId;
  (0, _index["default"])("tasks_delete(?, ?)", [req.userId, taskId]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 32,
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
var _default = deleteTask;
exports["default"] = _default;