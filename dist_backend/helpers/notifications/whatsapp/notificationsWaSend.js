"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = notificationWaSend;
var _index = _interopRequireDefault(require("../../../db/index.js"));
var _convertToWID = _interopRequireDefault(require("./convertToWID.js"));
var _initClient = require("./initClient.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function notificationWaSend() {
  console.log("job started");
  (0, _index["default"])('notifications_wa_get();', []).then(function (notifications) {
    var _iterator = _createForOfIteratorHelper(notifications),
      _step;
    try {
      var _loop = function _loop() {
        var ntfObject = _step.value;
        var clientReadyPromise = (0, _initClient.initClient)(ntfObject.orgId);
        clientReadyPromise.then(function (client) {
          ntfObject.notifications.map(function (ntf) {
            var contact = (0, _convertToWID["default"])(ntf.toContact);
            return client.sendMessage(contact, ntf.content).then(function () {
              return (0, _index["default"])("notifications_wa_mark_sent(?)", [ntf.id]);
            })["catch"](function (err) {
              return (0, _index["default"])("notifications_wa_mark_failed(?)", [ntf.id]);
            });
          });
        })["catch"](function (err) {
          console.log(err);
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}