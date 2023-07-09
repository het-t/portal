"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getOrgainzationsAdmins;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get admins of given organization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function getOrgainzationsAdmins(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder;
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "organizations_users_admins_get(?, ?, ?, ?, ?, ?)", [req.userId, from, recordsPerPage, sortBy, sortOrder, filters]).then(function (admins) {
    res.send({
      'orgs/adminsList': admins
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 6,
    //activityId
    15,
    //tableid
    null,
    //tablePkId
    [err] //details
    ]);
  })["finally"](function () {
    connection.end();
  });
}