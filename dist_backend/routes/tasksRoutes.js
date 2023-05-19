"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _taskCreate = _interopRequireDefault(require("../controllers/taskCreate.js"));
var _taskSubTasksCreate = _interopRequireDefault(require("../controllers/taskSubTasksCreate.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _sendResponse = _interopRequireDefault(require("../controllers/sendResponse.js"));
var _subTasksList = _interopRequireDefault(require("../controllers/subTasksList.js"));
var _tasksList = _interopRequireDefault(require("../controllers/tasksList.js"));
var _tasksData = _interopRequireDefault(require("../controllers/tasksData.js"));
var _tasksMasterList = _interopRequireDefault(require("../controllers/tasksMasterList.js"));
var _tasksSubTasksMasterList = _interopRequireDefault(require("../controllers/tasksSubTasksMasterList.js"));
var _tasksCount = _interopRequireDefault(require("../controllers/tasksCount.js"));
var _taskEdit = _interopRequireDefault(require("../controllers/taskEdit.js"));
var _taskMasterEdit = _interopRequireDefault(require("../controllers/taskMasterEdit.js"));
var _tasksLogs = _interopRequireDefault(require("../controllers/tasksLogs.js"));
var _tasksSubTaskEdit = _interopRequireDefault(require("../controllers/tasksSubTaskEdit.js"));
var _taskDelete = _interopRequireDefault(require("../controllers/taskDelete.js"));
var _tasksMasterCreate = _interopRequireDefault(require("../controllers/tasksMasterCreate.js"));
var _taskChangeStatus = _interopRequireDefault(require("../controllers/taskChangeStatus.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _auth["default"], _tasksList["default"], _sendResponse["default"]);
router.get('/get-task-data', _auth["default"], _tasksData["default"], _tasksLogs["default"], _sendResponse["default"]);
router.get('/create-task', _auth["default"], _tasksMasterCreate["default"], _taskCreate["default"], _taskSubTasksCreate["default"], _sendResponse["default"]);
router.get('/get-sub-tasks', _auth["default"], _subTasksList["default"], _sendResponse["default"]);
router.get('/get-tasks-master', _auth["default"], _tasksMasterList["default"], _sendResponse["default"]);
router.get('/get-sub-tasks-master', _auth["default"], _tasksSubTasksMasterList["default"], _sendResponse["default"]);
router.get('/count', _auth["default"], _tasksCount["default"], _sendResponse["default"]);
router.post('/delete-task', _auth["default"], _taskDelete["default"], _sendResponse["default"]);
router.get('/edit-task', _auth["default"], _tasksMasterCreate["default"], _taskEdit["default"], _tasksSubTaskEdit["default"], _sendResponse["default"]);
router.get('/edit-task-master', _auth["default"], _taskMasterEdit["default"], _sendResponse["default"]);
router.post('/change-status', _auth["default"], _taskChangeStatus["default"], _sendResponse["default"]);
var _default = router;
exports["default"] = _default;