"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var deleteRole = function deleteRole(req, res, next) {
  var roleId = req.body.params.roleId;
  (0, _index["default"])("roles_delete(?, ?)", [req.userId, roleId]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 3,
    //activityId
    8,
    //tableid
    roleId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = deleteRole;
exports["default"] = _default;