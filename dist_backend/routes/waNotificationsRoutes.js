"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _notificationsWaCreate = _interopRequireDefault(require("../controllers/notificationsWaCreate.js"));
var _notificationsWaGetHistory = _interopRequireDefault(require("../controllers/notificationsWaGetHistory.js"));
var _notificationsConsent = _interopRequireDefault(require("../controllers/notificationsConsent.js"));
var _multer = _interopRequireDefault(require("multer"));
var _profileWaContactAuth = _interopRequireDefault(require("../controllers/profileWaContactAuth.js"));
var _profileWaContactSet = _interopRequireDefault(require("../controllers/profileWaContactSet.js"));
var _notificationsWaQr = _interopRequireDefault(require("../controllers/notificationsWaQr.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

////////////////////////////////////////////////////
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
var pathToStoreFiles = _path["default"].join(__dirname, '../uploads/temp/');
/////////////////////////////////////////////////////////////

router.get('/otp', _profileWaContactAuth["default"]);
router.post('/otp', _profileWaContactSet["default"]);
var upload = (0, _multer["default"])({
  dest: pathToStoreFiles,
  limits: {
    fieldSize: '5mb'
  }
});
router.post('/create', upload.any(), _notificationsWaCreate["default"]);
router.get('/history', _notificationsWaGetHistory["default"]);
router.post('/consent', _notificationsConsent["default"]);
router.get('/qr', _notificationsWaQr["default"]);
var _default = router;
exports["default"] = _default;