"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = waContactSet;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function waContactSet(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'users_settings_set(?, ?)', [req.userId, req.body.params.otp]).then(function (results) {
    if (results[0].verified == 0) res.sendStatus(200);else res.sendStatus(403);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 61, 27, 8, [err]]);
  })["finally"](function () {
    connection.end();
  });
}