"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _generalRoutes = _interopRequireDefault(require("./generalRoutes.js"));
var _usersRoutes = _interopRequireDefault(require("./usersRoutes.js"));
var _rolesRoutes = _interopRequireDefault(require("./rolesRoutes.js"));
var _activityRoutes = _interopRequireDefault(require("./activityRoutes.js"));
var _clientsRoutes = _interopRequireDefault(require("./clientsRoutes.js"));
var _tasksRoutes = _interopRequireDefault(require("./tasksRoutes.js"));
var _myTasksRoutes = _interopRequireDefault(require("./myTasksRoutes.js"));
var _workDiaryRoutes = _interopRequireDefault(require("./workDiaryRoutes.js"));
var _settingsRoutes = _interopRequireDefault(require("./settingsRoutes.js"));
var _organizationsRoutes = _interopRequireDefault(require("./organizationsRoutes.js"));
var _chatInternalRoutes = _interopRequireDefault(require("./chatInternalRoutes.js"));
var _tasksMasterRoutes = _interopRequireDefault(require("./tasksMasterRoutes.js"));
var _rightsList = _interopRequireDefault(require("../controllers/rightsList.js"));
var _tags = _interopRequireDefault(require("./tags.js"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use('/', _generalRoutes["default"]);
app.use('/tags', _auth["default"], _tags["default"]);
app.use('/users', _auth["default"], _usersRoutes["default"]);
app.use('/roles', _auth["default"], _rolesRoutes["default"]);
app.use('/activities', _auth["default"], _activityRoutes["default"]);
app.use('/clients', _auth["default"], _clientsRoutes["default"]);
app.use('/tasks', _auth["default"], _tasksRoutes["default"]);
app.use('/tasksMaster', _auth["default"], _tasksMasterRoutes["default"]);
app.use('/myTasks', _auth["default"], _myTasksRoutes["default"]);
app.use('/workDiary', _auth["default"], _workDiaryRoutes["default"]);
app.use('/settings', _settingsRoutes["default"]);
app.use('/orgs', _organizationsRoutes["default"]);
app.use('/chat', _auth["default"], _chatInternalRoutes["default"]);
app.get('/rights/', _auth["default"], _rightsList["default"]);
app.get('/test', function (req, res) {
  return res.send("harleys in hawaii");
});
var _default = app;
exports["default"] = _default;