"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _workDiaryTasks = _interopRequireDefault(require("../controllers/workDiaryTasks.js"));
var _workDiarySubTasks = _interopRequireDefault(require("../controllers/workDiarySubTasks.js"));
var _workDiaryTasksCount = _interopRequireDefault(require("../controllers/workDiaryTasksCount.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/count', _workDiaryTasksCount["default"]);
router.get('/:userId/:taskId', _workDiarySubTasks["default"]);
router.get('/:userId', _workDiaryTasks["default"]);
var _default = router;
exports["default"] = _default;