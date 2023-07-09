"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsCreate;
var _index = _interopRequireDefault(require("../db/index.js"));
var _conDb = _interopRequireDefault(require("../db/conDb.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsCreate(req, res) {
  var name = req.body.params.name;
  var connection = (0, _conDb["default"])();
  (0, _index["default"])(connection, 'organizations_create(?, ?)', [req.userId, name]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    res.sendStatus(500);
  })["finally"](function () {
    connection.end();
  });
}