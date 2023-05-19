"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = waContactSet;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function waContactSet(req, res) {
  (0, _index["default"])('users_settings_set(?, ?)', [req.userId, req.body.params.otp]).then(function (results) {
    if (results[0].verified == 0) res.sendStatus(200);else res.sendStatus(403);
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 61, 27, 8, [err]])["catch"](function (err) {
      return console.log(err);
    });
    res.sendStatus(500);
  });
}