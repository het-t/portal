"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tasksGetMyTasks;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get tasks assigend to particular user
 * for my tasks screen
 * @param {*} req 
 * @param {*} res 
 */
function tasksGetMyTasks(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_get_my_tasks(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, from, recordsPerPage, sortBy, sortOrder, filters.name, filters.description, filters.client]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 28,
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