"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _tasksGetMyTasks = _interopRequireDefault(require("../controllers/tasksGetMyTasks.js"));
var _tasksMytasksChangeStatus = _interopRequireDefault(require("../controllers/tasksMytasksChangeStatus.js"));
var _tasksMyTasksCount = _interopRequireDefault(require("../controllers/tasksMyTasksCount.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _auth["default"], _tasksMyTasksCount["default"], _sendResponse["default"]);
router.get('/', _auth["default"], _tasksGetMyTasks["default"], _sendResponse["default"]);
router.get('/change-status', _auth["default"], _tasksMytasksChangeStatus["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;