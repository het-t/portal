"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getClients;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get list of clients for `client` screen
 * @param {*} req 
 * @param {*} res 
 */

function getClients(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "clients_master_get(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, from, recordsPerPage, sortBy, sortOrder, filters.name, filters.type, filters.ca, filters.contact, filters.tag]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 16,
    //activityId
    3,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}