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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use('/', _generalRoutes["default"]);
app.use('/users', _usersRoutes["default"]);
app.use('/roles', _rolesRoutes["default"]);
app.use('/activity', _activityRoutes["default"]);
app.use('/clients', _clientsRoutes["default"]);
app.use('/tasks', _tasksRoutes["default"]);
app.use('/myTasks', _myTasksRoutes["default"]);
app.use('/workDiary', _workDiaryRoutes["default"]);
app.use('/settings', _settingsRoutes["default"]);
app.use('/orgs', _organizationsRoutes["default"]);
app.get('/test', function (req, res) {
  return res.json("harleys in hawaii");
});
var _default = app;
exports["default"] = _default;