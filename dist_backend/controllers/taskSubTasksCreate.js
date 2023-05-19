"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var createSubTasks = function createSubTasks(req, res, next) {
  var _subTasks;
  var _req$query = req.query,
    subTasks = _req$query.subTasks,
    saved = _req$query.saved;
  subTasks = JSON.parse(subTasks);
  var _req$resData = req.resData,
    taskId = _req$resData.taskId,
    taskMasterId = _req$resData.taskMasterId;
  if (((_subTasks = subTasks) === null || _subTasks === void 0 ? void 0 : _subTasks.length) == 0) {
    next();
  } else {
    for (var st in subTasks) {
      var stObj = subTasks[st];
      for (var key in stObj) {
        if (stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') {
          delete subTasks[st][key];
        } else continue;
      }
    }
    subTasks = JSON.stringify(subTasks);
    (0, _index["default"])("sub_tasks_create(?, ?, ?, ?, ?)", [req.userId, taskMasterId ? taskMasterId : null, taskId, saved, subTasks]).then(function (results) {
      var _results$;
      var resKey = "subTasksCreated";
      var resData = (_results$ = results[0]) === null || _results$ === void 0 ? void 0 : _results$.subTaskId;
      if (_typeof(req === null || req === void 0 ? void 0 : req.logs) == "object") {
        req.logs.push({
          resKey: resKey,
          resData: resData
        });
      } else {
        req.logs = [{
          resKey: resKey,
          resData: resData
        }];
      }
      next();
    })["catch"](function (err) {
      res.sendStatus(500);
      (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 18,
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
  // }
};
var _default = createSubTasks;
exports["default"] = _default;