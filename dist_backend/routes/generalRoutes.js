"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _login = _interopRequireDefault(require("../controllers/login.js"));
var _logout = _interopRequireDefault(require("../controllers/logout.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _auth["default"], function (req, res) {
  res.send('1');
});
router.post('/login', _login["default"], _sendResponse["default"]);
router.post('/logout', _logout["default"]);
router.post('/auth', _login["default"]);
var _default = router;
exports["default"] = _default;