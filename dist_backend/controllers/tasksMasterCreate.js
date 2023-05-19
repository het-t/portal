"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create task master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * used in task-create and task-edit
 * in task-create if user choose not to save execution get transferred to next middleware 
 * in task-edit if user choose not to save exectuin get transferred to next middleware if next middleware is tasksSubTasksCreate it will also get skipped
 *  
 */

var createTaskMaster = function createTaskMaster(req, res, next) {
  var _req$query = req.query,
    title = _req$query.title,
    description = _req$query.description,
    cost = _req$query.cost,
    saved = _req$query.saved;

  //
  saved = new Number(saved);
  if (saved == false) {
    next();
  }
  //
  else {
    (0, _index["default"])("tasks_master_create(?, ?, ?, ?, ?)", [req.userId, req.orgId, title, description, cost ? cost : null]).then(function (results) {
      req.resData = {
        taskMasterId: results[0].taskMasterId
      };
      req.skipSubTasksCreate = false;
      next();
    })["catch"](function (err) {
      res.sendStatus(500);
      (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 33,
      //activityId
      12,
      //tableid
      req.resData,
      //tablePkId
      [err] //details
      ])["catch"](function (err) {
        return console.log(err);
      });
    });
  }
};
var _default = createTaskMaster;
exports["default"] = _default;