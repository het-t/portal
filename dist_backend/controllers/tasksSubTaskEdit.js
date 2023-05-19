"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit sub tasks of given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var editSubTasks = function editSubTasks(req, res, next) {
  var _req$resData;
  var _req$query = req.query,
    taskId = _req$query.taskId,
    subTasks = _req$query.subTasks,
    saved = _req$query.saved;
  var taskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (subTasks.length == 0) {
    next();
  } else {
    subTasks = JSON.parse(subTasks);
    for (var st in subTasks) {
      var stObj = subTasks[st];
      for (var key in stObj) {
        if ((stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') && key != 'id') {
          delete subTasks[st][key];
        } else continue;
      }
    }
    subTasks = JSON.stringify(subTasks);
    (0, _index["default"])("sub_tasks_edit(?, ?, ?, ?, ?)", [req.userId, taskId, taskMasterId, subTasks, saved]).then(function () {
      next();
    })["catch"](function (err) {
      res.sendStatus(500);
      (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 31,
      //activityId
      20,
      //tableid
      null,
      //tablePkId
      [err] //details
      ])["catch"](function (err) {
        return console.log(err);
      });
    });
  }
};
var _default = editSubTasks;
exports["default"] = _default;