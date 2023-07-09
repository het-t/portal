"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTaskData;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * get data of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 */

function getTaskData(req, res, next) {
  var taskId = req.params.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_get_task_data(?, ?)", [req.userId, taskId]).then(function (taskData) {
    var resKey = "taskData";
    var resData = taskData;
    req.resData = taskId;
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
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
    //activityId
    19,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}