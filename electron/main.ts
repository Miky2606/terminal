import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron'
import path from 'node:path'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    width:1200,
    height:680,
    minWidth:940,
    minHeight:560,
    frame:false,
  
    icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
    
    webPreferences: {
       
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  win.webContents.openDevTools()


  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
  
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

 //custom Buttons
 ipcMain.on("closeApp", ()=>{
  win?.close()
 })  

 ipcMain.on("minimizeApp", ()=>{
  win?.minimize()
 })

 ipcMain.on("maximizeApp", ()=>{
  if(win?.isMaximized()){
    win.restore()
  }else{
  win?.maximize()
  }
 })


app.on('window-all-closed', () => {
  win = null
})


app.whenReady().then(() => {

  createWindow()
})

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()

})
