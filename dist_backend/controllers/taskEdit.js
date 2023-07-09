"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = editTask;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit task
 * @param {*} req 
 * @param {*} res 
 */

function editTask(req, res) {
  var _req$resData;
  var taskId = req.params.id;
  var _req$body$params = req.body.params,
    taskMasterId = _req$body$params.taskMasterId,
    title = _req$body$params.title,
    description = _req$body$params.description,
    cost = _req$body$params.cost,
    coordinatorIds = _req$body$params.coordinatorIds,
    clientId = _req$body$params.clientId,
    removedSubTasks = _req$body$params.removedSubTasks,
    subTasks = _req$body$params.subTasks,
    saved = _req$body$params.saved;
  var reqTaskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
    taskMasterId = reqTaskMasterId;
  }
  if (subTasks) subTasks = JSON.parse(subTasks);else subTasks = [];
  for (var st in subTasks) {
    var stObj = subTasks[st];
    for (var key in stObj) {
      if ((stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') && key != 'id') {
        delete subTasks[st][key];
      } else continue;
    }
  }
  subTasks = JSON.stringify(subTasks);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_edit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, taskId, taskMasterId ? taskMasterId : null, title, description, cost ? cost : null, clientId ? clientId : null, coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null, removedSubTasks, saved, subTasks]).then(function (resutls) {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 30,
    //activityId
    19,
    //tableid
    taskId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}