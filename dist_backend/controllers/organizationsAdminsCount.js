"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * get total number of admins
 * @param {*} req 
 * @param {*} res 
 */

var adminsCount = function adminsCount(req, res) {
  var orgId = req.query.orgId;
  (0, _index["default"])("organizations_users_admins_count(?, ?)", [req.userId, orgId]).then(function (results) {
    res.send({
      'count': results[0].count
    });
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 23,
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
var _default = adminsCount;
exports["default"] = _default;