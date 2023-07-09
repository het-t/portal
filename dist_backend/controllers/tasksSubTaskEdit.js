"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = editSubTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit sub tasks of given task
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function editSubTasks(req, res, next) {
  var _req$resData;
  var _req$body$params = req.body.params,
    taskId = _req$body$params.taskId,
    subTasks = _req$body$params.subTasks,
    saved = _req$body$params.saved;
  var taskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (subTasks.length == 0) {
    next();
  } else {
    var connection = (0, _conDb["default"])();
    (0, _index["default"])(connection, "sub_tasks_edit(?, ?, ?, ?, ?)", [req.userId, taskId, taskMasterId, subTasks, saved]).then(function () {
      next();
    })["catch"](function (err) {
      res.sendStatus(500);
      return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 31,
      //activityId
      20,
      //tableid
      null,
      //tablePkId
      [err] //details
      ]).then(function () {
        connection.end();
      });
    });
  }
}