"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settingsDataGet;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function settingsDataGet(req, res) {
  (0, _index["default"])("settings_get(?, ?)", [req.userId, parseInt(req.query.pageId)]).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 51, 27, null, [err]])["catch"](function (err) {
      return console.log(err);
    });
    res.sendStatus(500);
  });
}