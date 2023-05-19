"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = organizationsList;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function organizationsList(req, res) {
  (0, _index["default"])('organizations_list(?)', [req.userId]).then(function (results) {
    res.send({
      'orgsList': results
    });
  })["catch"](function (err) {
    console.log(err);
    res.sendStatus(500);
  });
}