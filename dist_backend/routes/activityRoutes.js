"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _activityData = _interopRequireDefault(require("../controllers/activityData.js"));
var _activityCount = _interopRequireDefault(require("../controllers/activityCount.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _activityData["default"]);
router.get('/count', _activityCount["default"]);
var _default = router;
exports["default"] = _default;