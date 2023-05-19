"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * delete user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var deleteUser = function deleteUser(req, res, next) {
  var userIdToDel = req.body.params.userId;
  (0, _index["default"])("users_delete(?, ?)", [req.userId, userIdToDel]).then(function () {
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 8,
    //activityId
    15,
    //tableid
    userIdToDel,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = deleteUser;
exports["default"] = _default;