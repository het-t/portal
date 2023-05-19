"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClients = getClients;
exports.initClient = initClient;
var _createClient2 = _interopRequireDefault(require("./createClient.js"));
var _getLatestFolder = _interopRequireDefault(require("./getLatestFolder.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var clients = {};
var flagToDestroyClient = true;
function initClient(orgId) {
  var _clients$orgId;
  var latestFolder = (0, _getLatestFolder["default"])(orgId, 'for-use');
  if (clients !== null && clients !== void 0 && clients[orgId] && latestFolder && (clients === null || clients === void 0 ? void 0 : (_clients$orgId = clients[orgId]) === null || _clients$orgId === void 0 ? void 0 : _clients$orgId.authStrategy.clientId) === latestFolder) {
    console.log("=> latestSession ".concat(orgId, " ").concat(latestFolder));
    return Promise.resolve(clients[orgId]);
  } else return new Promise(function (resolve, reject) {
    var _createClient = (0, _createClient2["default"])(orgId, 'for-use'),
      client = _createClient.client,
      clientId = _createClient.clientId;
    if (clientId) {
      client.on('qr', function () {
        // destroyClient.call(client)
        console.log("=> ".concat(clientId, " QR"));
        reject("".concat(orgId, " NOT_AUTHORISED"));
      });
      client.on('authenticated', function () {
        return console.log("=> ".concat(clientId, " authenticated"));
      });
      client.on('auth_failure', function () {
        // destroyClient.call(client)
        console.log("=> ".concat(clientId, " auth_failure"));
        reject("".concat(orgId, " AUTH_FAILURE"));
      });
      client.on('ready', function () {
        clients[orgId] = client;
        console.log("=> ".concat(clientId, " READY"));
        resolve(client);
      });
      client.initialize()["catch"](function (err) {
        // destroyClient.call(client)
        console.error("".concat(clientId, " ").concat(err));
      });
    } else {
      reject("".concat(orgId, " SESSION_NOT_FOUND"));
    }
  });
}
function destroyClient() {
  if (flagToDestroyClient === true) {
    this.destroy();
    try {
      this.destroy();
    } catch (err) {
      console.log(err);
    }
  }
}
function getClients() {
  return clients;
}