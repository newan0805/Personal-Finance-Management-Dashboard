const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  appName: "Thejosat keels",
  api: {
    fetchData: async (url) => {
      return await ipcRenderer.invoke("api:fetchData", url);
    },
  },
});
