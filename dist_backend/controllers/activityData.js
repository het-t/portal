"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usersActivities;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get user_activities for `activity` screen
 * @param {*} req 
 * @param {*} res 
 */

function usersActivities(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "user_activities(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, from, recordsPerPage, sortBy, sortOrder, filters.email, filters.activity, filters.refTable, filters.detail, filters.datetime]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 12,
    //activityId
    14,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
}