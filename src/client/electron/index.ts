/* eslint-disable @typescript-eslint/no-var-requires */
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
  });

  mainWindow.loadURL('http://localhost:5173');
  // mainWindow.loadFile('../../../index.html');
  mainWindow.webContents.openDevTools();
};


app.whenReady().then(() => {
  createWindow();
  
  //Handles Windows close
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  
  //Handles Mac reopen
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
