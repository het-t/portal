"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get admins of given organization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var getOrgainzationsAdmins = function getOrgainzationsAdmins(req, res) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder,
    filters = _req$query.filters;
  for (var i in filters) {
    if (filters[i] == '') filters[i] = null;
  }
  (0, _index["default"])("organizations_users_admins_get(?, ?, ?, ?, ?, ?)", [req.userId, from, recordsPerPage, sortBy, sortOrder, filters]).then(function (admins) {
    res.send({
      'orgs/adminsList': admins
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 6,
    //activityId
    15,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = getOrgainzationsAdmins;
exports["default"] = _default;