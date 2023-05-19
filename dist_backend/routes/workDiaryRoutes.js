"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _workDiaryTasks = _interopRequireDefault(require("../controllers/workDiaryTasks.js"));
var _workDiarySubTasks = _interopRequireDefault(require("../controllers/workDiarySubTasks.js"));
var _workDiaryTasksCount = _interopRequireDefault(require("../controllers/workDiaryTasksCount.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _auth["default"], _workDiaryTasks["default"], _sendResponse["default"]);
router.get('/sub-tasks', _auth["default"], _workDiarySubTasks["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _workDiaryTasksCount["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;