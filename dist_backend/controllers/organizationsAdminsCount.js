"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = adminsCount;
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get total number of admins
 * @param {*} req 
 * @param {*} res 
 */

function adminsCount(req, res) {
  var orgId = req.query.orgId;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "organizations_users_admins_count(?, ?)", [req.userId, orgId]).then(function (results) {
    res.send({
      'count': results[0].count
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