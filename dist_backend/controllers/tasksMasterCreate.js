"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTaskMaster;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * create task master
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function createTaskMaster(req, res, next) {
  var _req$body$params = req.body.params,
    title = _req$body$params.title,
    description = _req$body$params.description,
    cost = _req$body$params.cost,
    saved = _req$body$params.saved;

  //
  saved = new Number(saved);
  if (saved == false) {
    next();
  }
  //
  else {
    var connection = (0, _conDb["default"])();
    (0, _index["default"])(connection, "tasks_master_create(?, ?, ?, ?, ?)", [req.userId, req.orgId, title, description, cost ? cost : null]).then(function (results) {
      req.resData = {
        taskMasterId: results[0].taskMasterId
      };
      req.skipSubTasksCreate = false;
      next();
    })["catch"](function (err) {
      res.sendStatus(500);
      return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 33,
      //activityId
      12,
      //tableid
      req.resData,
      //tablePkId
      [err] //details
      ]);
    })["finally"](function () {
      connection.end();
    });
  }
}