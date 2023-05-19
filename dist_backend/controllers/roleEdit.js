"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * edit role
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var editRole = function editRole(req, res, next) {
  (0, _index["default"])("roles_edit(?, ?, ?, ?)", [req.userId, req.body.params.roleId, req.body.params.roleName, JSON.stringify(req.body.params.roleRights)]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 5,
    //activityId
    8,
    //tableid
    req.query.editRoleId,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = editRole;
exports["default"] = _default;