"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settingsDataSet;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function settingsDataSet(req, res) {
  (0, _index["default"])("settings_set(?, ?)", [req.userId, JSON.stringify(req.body.params)]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 52, 27, req.body.params.key, [err]])["catch"](function (err) {
      return console.log(err);
    });
    res.sendStatus(500);
  });
}