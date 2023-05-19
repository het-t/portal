"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var editTask = function editTask(req, res, next) {
  var _req$resData;
  var _req$query = req.query,
    taskId = _req$query.taskId,
    taskMasterId = _req$query.taskMasterId,
    title = _req$query.title,
    description = _req$query.description,
    cost = _req$query.cost,
    coordinatorIds = _req$query.coordinatorIds,
    clientId = _req$query.clientId,
    removedSubTasks = _req$query.removedSubTasks;
  var reqTaskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
    taskMasterId = reqTaskMasterId;
  }
  (0, _index["default"])("tasks_edit(?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, taskId, taskMasterId ? taskMasterId : null, title, description, cost ? cost : null, clientId ? clientId : null, coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null, removedSubTasks]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 30,
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
var _default = editTask;
exports["default"] = _default;