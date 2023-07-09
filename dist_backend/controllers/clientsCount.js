"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = clientsCount;
var _index = _interopRequireDefault(require("../db/index.js"));
var _formatFilters = _interopRequireDefault(require("../helpers/formatFilters.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get number of clients
 * @param {*} req 
 * @param {*} res 
 */

function clientsCount(req, res) {
  var filters = (0, _formatFilters["default"])(req.query.filters);
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "clients_count(?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, filters.name, filters.type, filters.ca, filters.contact, filters.tag]).then(function (results) {
    res.send({
      count: results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
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