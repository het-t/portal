"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = notificaitonsWaGetHistory;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function notificaitonsWaGetHistory(req, res) {
  (0, _index["default"])('notifications_wa_get_history(?)', [req.userId]).then(function (results) {
    res.send(results);
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 64, 24, null, [err]])["catch"](function (err) {
      return console.log(err);
    });
  });
}