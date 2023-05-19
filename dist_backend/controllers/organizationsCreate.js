"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsCreate;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsCreate(req, res) {
  var name = req.body.params.name;
  (0, _index["default"])('organizations_create(?, ?)', [req.userId, name]).then(function () {
    res.sendStatus(200);
  })["catch"](function (err) {
    console.log(err);
    res.sendStatus(500);
  });
}