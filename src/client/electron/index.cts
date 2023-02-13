/* eslint-disable @typescript-eslint/no-var-requires */
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
  });

  mainWindow.loadURL('http://localhost:5173');
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});