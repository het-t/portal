"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rolesCount;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get number of roles
 * @param {*} req 
 * @param {*} res 
 */

function rolesCount(req, res) {
  var connection = (0, _conDb["default"])();
  var filters = (0, _formatFilters["default"])(req.query.filters);
  (0, _index["default"])(connection, "roles_count(?, ?, ?, ?)", [req.userId, req.orgId, filters.name, filters.rights]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
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