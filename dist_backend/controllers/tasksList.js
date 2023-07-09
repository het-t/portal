"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get list of tasks for `tasks` screen
 * @param {*} req 
 * @param {*} res 
 */
function getTasks(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_get(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, from, recordsPerPage, sortBy, sortOrder, filters.name, filters.description, filters.client, filters.status, filters.progress]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 20,
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