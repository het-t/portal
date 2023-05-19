"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _notificationsWaSend = _interopRequireDefault(require("../../helpers/notifications/whatsapp/notificationsWaSend.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var job = setInterval(_notificationsWaSend["default"], 1000 * 60 * 5);
var _default = job;
exports["default"] = _default;