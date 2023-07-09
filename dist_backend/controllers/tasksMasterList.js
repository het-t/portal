"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTasksMaster;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
function getTasksMaster(req, res) {
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_master_get(?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, filters.title, filters.description, req.query.sortBy, req.query.sortOrder]).then(function (results) {
    res.send(results);
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