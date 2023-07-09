"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTask;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create task
 * @param {*} req 
 * @param {*} res 
 */

function createTask(req, res) {
  var _req$resData;
  var _req$body$params = req.body.params,
    taskMasterId = _req$body$params.taskMasterId,
    title = _req$body$params.title,
    description = _req$body$params.description,
    cost = _req$body$params.cost,
    coordinatorIds = _req$body$params.coordinatorIds,
    clientId = _req$body$params.clientId,
    subTasks = _req$body$params.subTasks,
    saved = _req$body$params.saved;
  var reqTaskMasterId = req === null || req === void 0 ? void 0 : (_req$resData = req.resData) === null || _req$resData === void 0 ? void 0 : _req$resData.taskMasterId;
  if (reqTaskMasterId != undefined && reqTaskMasterId != null) {
    taskMasterId = reqTaskMasterId;
  }
  subTasks = JSON.parse(subTasks);
  for (var st in subTasks) {
    var stObj = subTasks[st];
    for (var key in stObj) {
      if (stObj[key] == null || stObj[key] == 'null' || stObj[key] == '') {
        delete subTasks[st][key];
      } else continue;
    }
  }
  subTasks = JSON.stringify(subTasks);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, taskMasterId ? taskMasterId : null, title, description, cost ? cost : null, clientId ? clientId : null, coordinatorIds ? JSON.stringify(JSON.parse(coordinatorIds)) : null, saved, subTasks]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 17,
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