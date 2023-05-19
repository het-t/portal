"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * create task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var createTask = function createTask(req, res, next) {
  var _req$resData;
  var _req$query = req.query,
    taskMasterId = _req$query.taskMasterId,
    title = _req$query.title,
    description = _req$query.description,
    cost = _req$query.cost,
    coordinatorIds = _req$query.coordinatorIds,
    clientId = _req$query.clientId;
  var reqTaskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
    taskMasterId = reqTaskMasterId;
  }
  (0, _index["default"])("tasks_create(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, taskMasterId ? taskMasterId : null, title, description, cost ? cost : null, clientId ? clientId : null, coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null]).then(function (results) {
    var resKey = "taskCreated";
    var resData = results[0].createdTaskId;
    req.resData = {
      taskId: resData,
      taskMasterId: taskMasterId
    };
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
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 17,
    //activityId
    19,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = createTask;
exports["default"] = _default;