Object.defineProperty(exports, "__esModule", { value: !0 });var e = require("electron");e.contextBridge.exposeInMainWorld("electronAPI", {
  getDeviceId: function() {
    return "CC11001100";
  },
  httpRequest: function(r) {
    return e.ipcRenderer.invoke("http-request", r);
  },
  updateCursorConfig: function(r) {
    return e.ipcRenderer.invoke("update-cursor-config", r)
      .catch(function(e) {
        throw e.message || e;
      });
  },
  refreshCursor: function(r) {
    return e.ipcRenderer.invoke("refresh-cursor", r)
      .catch(function(e) {
        throw e.message || e;
      });
  },
  banCursorUpgrade: function() {
    return e.ipcRenderer.invoke("ban-cursor-upgrade")
      .catch(function(e) {
        throw e.message || e;
      });
  },
  patchCursor: function() {
    return e.ipcRenderer.invoke("patch-cursor")
      .catch(function(e) {
        throw e.message || e;
      });
  },
  beforeRefreshCursor: function() {
    return e.ipcRenderer.invoke("before-refresh-cursor")
      .catch(function(e) {
        throw e.message || e;
      });
  },
  isDev: function() {
    return e.ipcRenderer.invoke("is-dev");
  },
  getCursorVersion: function() {
    return e.ipcRenderer.invoke("get-cursor-version");
  },
  getAppVersion: function() {
    return e.ipcRenderer.invoke("get-app-version");
  },
  openWebsite: function(r) {
    return e.ipcRenderer.invoke("open-website", r);
  },
  getPlatform: function() {
    return e.ipcRenderer.invoke("get-platform");
  },
  updateWindowSettings: function(r) {
    return e.ipcRenderer.invoke("update-window-settings", r);
  },
  openExtensionWindow: function(r, n) {
    return e.ipcRenderer.invoke("open-extension-window", {
      url: r,
      title: n
    });
  },
  openTerminal: function() {
    return e.ipcRenderer.invoke("open-terminal");
  }
});