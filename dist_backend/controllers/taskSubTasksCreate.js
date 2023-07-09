"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSubTasks;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * create sub-task for given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function createSubTasks(req, res, next) {
  var _req$body$params = req.body.params,
    subTasks = _req$body$params.subTasks,
    saved = _req$body$params.saved;
  var _req$resData = req.resData,
    taskId = _req$resData.taskId,
    taskMasterId = _req$resData.taskMasterId;
  if ((subTasks === null || subTasks === void 0 ? void 0 : subTasks.length) == 0) {
    next();
  } else {
    var connection = (0, _conDb["default"])();
    (0, _index["default"])(connection, "sub_tasks_create(?, ?, ?, ?, ?)", [req.userId, taskMasterId ? taskMasterId : null, taskId, saved, subTasks]).then(function (results) {
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
      return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 18,
      //activityId
      20,
      //tableid
      null,
      //tablePkId
      [err] //details
      ]);
    })["finally"](function () {
      connection.end();
    });
  }
}