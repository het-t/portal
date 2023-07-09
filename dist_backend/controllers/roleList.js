"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRoles;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get roles
 * @param {*} req 
 * @param {*} res 
 */

function getRoles(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var connection = (0, _conDb["default"])();
  var filters = (0, _formatFilters["default"])(req.query.filters);
  (0, _index["default"])(connection, "roles_get(?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, from, recordsPerPage, sortBy, sortOrder, filters.name, filters.rights]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 10,
    //activityId
    8,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}