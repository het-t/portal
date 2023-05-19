"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = workDiaryTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function workDiaryTasks(req, res, next) {
  var filters = req.query.filters;
  var generalFilters = filters.slice(3, 9).map(function (el) {
    if (el == '') return null;
    return el;
  });
  filters = filters.slice(0, 3).map(function (el) {
    if (el == '' || el == null || el == 'null') return null;
    return el;
  });
  (0, _index["default"])("tasks_users_tasks(?, ?, ?, ?, ?)", [req.userId, filters[0], filters[1], filters[2], generalFilters]).then(function (tasks) {
    var resKey = 'workDiaryList';
    var resData = tasks;
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
    console.log(err);
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 42,
    //activityId
    21,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
}