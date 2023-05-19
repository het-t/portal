"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createClient;
var _whatsappWeb = _interopRequireDefault(require("whatsapp-web.js"));
var _getLatestFolder = _interopRequireDefault(require("./getLatestFolder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Client = _whatsappWeb["default"].Client,
  LocalAuth = _whatsappWeb["default"].LocalAuth;
function createClient(orgId, usecase) {
  var clientId = "admin-".concat(orgId);
  if (usecase === 'for-use') clientId = (0, _getLatestFolder["default"])(orgId, usecase);
  var client = new Client({
    authStrategy: new LocalAuth({
      clientId: clientId,
      dataPath: "./auth-".concat(usecase)
    }),
    puppeteer: {
      handleSIGINT: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    },
    takeoverOnConflict: true
  });
  return {
    client: client,
    clientId: clientId
  };
}