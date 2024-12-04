const axios = require("axios");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
    },
    autoHideMenuBar: true,
    frame: true,
  });

  mainWindow.webContents.session.setPermissionRequestHandler(
    (webContents, permission, callback) => {
      callback(true);
    }
  );

  mainWindow.loadURL("http://localhost:5175");
}

ipcMain.handle('api:fetchData', async (event, url) => {
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: error.message };
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
