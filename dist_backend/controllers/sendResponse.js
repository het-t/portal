"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * sends commulative response of all controllers in chain
 * @param {Object} req 
 * @param {*} res 
 */
var sendResponse = function sendResponse(req, res) {
  var _req$logs;
  var resDataObj = {};
  var length = (_req$logs = req.logs) === null || _req$logs === void 0 ? void 0 : _req$logs.length;
  if (length == 0 || length == undefined) res.end();else {
    var _iterator = _createForOfIteratorHelper(req === null || req === void 0 ? void 0 : req.logs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var logObj = _step.value;
        var resData = logObj.resData,
          resKey = logObj.resKey;
        Object.defineProperty(resDataObj, resKey, {
          value: resData,
          enumerable: true,
          configurable: true,
          writable: true
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    res.send(resDataObj);
  }
};
var _default = sendResponse;
exports["default"] = _default;