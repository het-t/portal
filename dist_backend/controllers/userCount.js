"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usersCount;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get total number of users
 * @param {*} req 
 * @param {*} res 
 */

function usersCount(req, res) {
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "users_count(?, ?, ?, ?, ?)", [req.userId, req.orgId, filters.name, filters.email, filters.rights]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
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