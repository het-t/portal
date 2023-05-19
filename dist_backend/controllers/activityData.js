"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = _interopRequireDefault(require("../db/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * get user_activities for `activity` screen
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

var usersActivities = function usersActivities(req, res, next) {
  var _req$query = req.query,
    from = _req$query.from,
    recordsPerPage = _req$query.recordsPerPage,
    sortBy = _req$query.sortBy,
    sortOrder = _req$query.sortOrder,
    filters = _req$query.filters;
  for (var i in filters) {
    if (filters[i] == '') filters[i] = null;
  }
  (0, _index["default"])("user_activities(?, ?, ?, ?, ?, ?, ?)", [req.userId, req.orgId, from, recordsPerPage, sortBy, sortOrder, filters]).then(function (activities) {
    var resKey = 'activityList';
    if (_typeof(req === null || req === void 0 ? void 0 : req.logs) == "object") {
      req.logs.push({
        resKey: resKey,
        resData: activities
      });
    } else {
      req.logs = [{
        resKey: resKey,
        resData: activities
      }];
    }
    next();
  })["catch"](function (err) {
    res.sendStatus(500);
    (0, _index["default"])('logs_add(?, ?, ?, ?, ?)', [req.userId, 12,
    //activityId
    14,
    //tableid
    null,
    //tablePkId
    [err] //details
    ])["catch"](function (err) {
      return console.log(err);
    });
  });
};
var _default = usersActivities;
exports["default"] = _default;