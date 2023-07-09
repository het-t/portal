"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tasksCount;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get number of tasks
 * @param {*} req 
 * @param {*} res 
 */

function tasksCount(req, res) {
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "tasks_count(?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, filters.name, filters.description, filters.client, filters.status, filters.progress]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
    //activityId
    19,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
}