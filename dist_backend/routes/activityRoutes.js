"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _activityData = _interopRequireDefault(require("../controllers/activityData.js"));
var _activityCount = _interopRequireDefault(require("../controllers/activityCount.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _auth["default"], _activityData["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _activityCount["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;