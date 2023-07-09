"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTaskLogs;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * get logs of task for edit task screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function getTaskLogs(req, res, next) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_get_logs(?, ?)", [req.userId, req.resData]).then(function (taskLogs) {
    var resKey = "taskLogs";
    var resData = taskLogs;
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
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 37,
    //activityId
    21,
    //tableid
    req.resData,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}