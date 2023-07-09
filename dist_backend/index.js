"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _http = _interopRequireDefault(require("http"));
var _fs = _interopRequireDefault(require("fs"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _index = _interopRequireDefault(require("./routes/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import {getClients} from './helpers/notifications/whatsapp/initClient.js'
// import notificationWaSend from './helpers/notifications/whatsapp/notificationsWaSend.js'
//remove below part before creating build
dotenv.config();
//remove above part before creating build

var app = (0, _express["default"])();
var runningAsProduction = process.env.NODE_MODE === "production";
var origin = runningAsProduction ? process.env.DEV_ORIGIN : process.env.PRO_ORIGIN;
app.use((0, _cors["default"])({
  origin: origin
}));
app.use((0, _cookieParser["default"])('secret'));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json({
  limit: '10mb'
}));
app.use('/api', _index["default"]);
var server = _http["default"].createServer(app);
if (runningAsProduction) {
  server.listen();
} else {
  server.listen(process.env.DEV_PORT);
  console.log("PORT ".concat(process.env.DEV_PORT));
}