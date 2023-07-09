"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settingsDataSet;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function settingsDataSet(req, res) {
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, "settings_set(?, ?)", [req.userId, JSON.stringify(req.body.params)]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
    return (0, _index["default"])(connection, 'logs_add(?, ?, ?, ?, ?)', [req.userId, 52, 27, req.body.params.key, [err]]);
  })["finally"](function () {
    connection.end();
  });
}