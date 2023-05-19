"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _http = _interopRequireDefault(require("http"));
var _fs = _interopRequireDefault(require("fs"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _path = require("path");
var url = _interopRequireWildcard(require("url"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import {getClients} from './helpers/notifications/whatsapp/initClient.js'
// import notificationWaSend from './helpers/notifications/whatsapp/notificationsWaSend.js'
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
var app = (0, _express["default"])();

// dotenv.config()
app.use((0, _cors["default"])({
  origin: "https://corporatetasks.com/"
}));
app.use((0, _cookieParser["default"])('secret'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json({
  limit: '10mb'
}));
app.get('/', function (req, res) {
  res.send("nothing");
});
app.use('/u/api', _index["default"]);
app.use('/api', _index["default"]);
var options = {
  key: _fs["default"].readFileSync('./ssl/corporatetasks.com_privatekey.key'),
  cert: _fs["default"].readFileSync('./ssl/combined.crt'),
  ca: [_fs["default"].readFileSync('./ssl/CerteraDVSSLCA.crt'), _fs["default"].readFileSync('./ssl/USERTrustRSAAAACA.crt'), _fs["default"].readFileSync('./ssl/AAACertificateServices.crt')]
};
var server = _http["default"].createServer(app);
server.listen();