"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

// #####################
//      not implemeted yet
//######################
var editTaskMaster = function editTaskMaster(req, res, next) {
  var logObj = {
    "activityId": 5,
    "user": req.userId,
    "referenceTable": "tasks_master",
    "referenceTablePkId": null,
    "detail": "",
    "resData": {},
    "resKey": "taskMasterEdited"
  };
  var _req$query = req.query,
    taskMasterId = _req$query.taskMasterId,
    title = _req$query.title,
    description = _req$query.description,
    cost = _req$query.cost,
    saved = _req$query.saved;
  (0, _index["default"])("tasks_master_edit_task(?, ?, ?, ?, ?, ?)", [req.userId, taskMasterId, title, description, cost])
  // .then((results) => {
  //     logObj.referenceTablePkId = results[0].pk_for_logs
  //     logObj.detail = 'success'
  // })
  ["catch"](function (err) {
    res.send(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 30,
    //activityId
    19,
    //tableid
    taskId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
  // .finally(()=>{
  //     if (typeof req?.logs == "object") {
  //         req.logs.push(logObj)
  //     }
  //     else {
  //         req.logs = [logObj]
  //     }
  //     next()
  // })
};
var _default = editTaskMaster;
exports["default"] = _default;