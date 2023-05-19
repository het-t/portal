"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _notificationsWaCreate = _interopRequireDefault(require("../controllers/notificationsWaCreate.js"));
var _notificationsWaGetHistory = _interopRequireDefault(require("../controllers/notificationsWaGetHistory.js"));
var _profileWaContactAuth = _interopRequireDefault(require("../controllers/profileWaContactAuth.js"));
var _profileWaContactSet = _interopRequireDefault(require("../controllers/profileWaContactSet.js"));
var _notificationsConsent = _interopRequireDefault(require("../controllers/notificationsConsent.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/create', _auth["default"], _notificationsWaCreate["default"]);
router.get('/', _auth["default"], _profileWaContactAuth["default"]);
router.post('/', _auth["default"], _profileWaContactSet["default"]);
router.get('/history', _auth["default"], _notificationsWaGetHistory["default"]);
router.post('/consent', _auth["default"], _notificationsConsent["default"]);
var _default = router;
exports["default"] = _default;