const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800
  })

  mainWindow.loadURL('http://localhost:5173'); //Connect to site (this will need npm run dev first)
}

app.whenReady().then(() => {
  createWindow()
})