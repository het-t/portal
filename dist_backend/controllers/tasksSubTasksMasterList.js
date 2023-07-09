"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSubTasksMaster;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
function getSubTasksMaster(req, res) {
  var taskMasterId = req.params.id;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "sub_tasks_master_get(?, ?)", [req.userId, taskMasterId]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 27,
    //activityId
    20,
    //tableid
    taskMasterId,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}