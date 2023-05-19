"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _organizationsList = _interopRequireDefault(require("../controllers/organizationsList.js"));
var _organizationsAdminCreate = _interopRequireDefault(require("../controllers/organizationsAdminCreate.js"));
var _organizationsCreate = _interopRequireDefault(require("../controllers/organizationsCreate.js"));
var _organizationsCount = _interopRequireDefault(require("../controllers/organizationsCount.js"));
var _organizationsAdminsList = _interopRequireDefault(require("../controllers/organizationsAdminsList.js"));
var _organizationsAdminsCount = _interopRequireDefault(require("../controllers/organizationsAdminsCount.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _auth["default"], _organizationsList["default"]);
router.post('/create-org', _auth["default"], _organizationsCreate["default"]);
router.get('/count', _auth["default"], _organizationsCount["default"]);
router.get('/admins/count', _auth["default"], _organizationsAdminsCount["default"]);
router.get('/admins', _auth["default"], _organizationsAdminsList["default"]);
router.post('/admins/create-admin', _auth["default"], _organizationsAdminCreate["default"]);
var _default = router;
exports["default"] = _default;