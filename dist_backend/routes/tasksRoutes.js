"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _taskCreate = _interopRequireDefault(require("../controllers/taskCreate.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _subTasksList = _interopRequireDefault(require("../controllers/subTasksList.js"));
var _tasksList = _interopRequireDefault(require("../controllers/tasksList.js"));
var _tasksData = _interopRequireDefault(require("../controllers/tasksData.js"));
var _tasksCount = _interopRequireDefault(require("../controllers/tasksCount.js"));
var _taskEdit = _interopRequireDefault(require("../controllers/taskEdit.js"));
var _tasksLogs = _interopRequireDefault(require("../controllers/tasksLogs.js"));
var _taskDelete = _interopRequireDefault(require("../controllers/taskDelete.js"));
var _tasksMasterCreate = _interopRequireDefault(require("../controllers/tasksMasterCreate.js"));
var _taskChangeStatus = _interopRequireDefault(require("../controllers/taskChangeStatus.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _tasksCount["default"]);
router.get('/:id/sub-tasks', _subTasksList["default"]);
router.get('/:id', _tasksData["default"], _tasksLogs["default"], _sendResponse["default"]);
router.get('/', _tasksList["default"]);
router.post('/', _tasksMasterCreate["default"], _taskCreate["default"]);
router.patch('/:id', _taskChangeStatus["default"]);
router.put('/:id', _tasksMasterCreate["default"], _taskEdit["default"]);
router["delete"]('/:id', _taskDelete["default"]);
var _default = router;
exports["default"] = _default;