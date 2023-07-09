"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _tasksGetMyTasks = _interopRequireDefault(require("../controllers/tasksGetMyTasks.js"));
var _tasksMytasksChangeStatus = _interopRequireDefault(require("../controllers/tasksMytasksChangeStatus.js"));
var _tasksMyTasksCount = _interopRequireDefault(require("../controllers/tasksMyTasksCount.js"));
var _myTasksChangeTags = _interopRequireDefault(require("../controllers/myTasksChangeTags.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _tasksMyTasksCount["default"]);
router.get('/', _tasksGetMyTasks["default"]);
router.patch('/:taskId/status', _tasksMytasksChangeStatus["default"]);
router.patch('/:taskId/tags', _myTasksChangeTags["default"]);
var _default = router;
exports["default"] = _default;