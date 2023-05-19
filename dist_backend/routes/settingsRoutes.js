"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("../controllers/auth.js"));
var _profilePicGet = _interopRequireDefault(require("../controllers/profilePicGet.js"));
var _profilePicSet = _interopRequireDefault(require("../controllers/profilePicSet.js"));
var _settingsDataGet = _interopRequireDefault(require("../controllers/settingsDataGet.js"));
var _settingsDataSet = _interopRequireDefault(require("../controllers/settingsDataSet.js"));
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import waNotificationRoutes from './waNotificationsRoutes.js'
//////////////////////////////////////////////////////////
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
var pathToStoreFiles = _path["default"].join(__dirname, '../uploads/temp/');
/////////////////////////////////////////////////////////

var router = _express["default"].Router();
router.get('/', _auth["default"], _settingsDataGet["default"]);
router.post('/', _auth["default"], _settingsDataSet["default"]);
router.get('/profile-pic', _auth["default"], _profilePicGet["default"]);
var upload = (0, _multer["default"])({
  dest: pathToStoreFiles
});
router.post('/profile-pic', _auth["default"], upload.single('File'), _profilePicSet["default"]);

// router.use('/notifications/wa/', auth, waNotificationRoutes)
var _default = router;
exports["default"] = _default;