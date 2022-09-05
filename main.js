const {app,BrowserWindow,Menu,shell,ipcMain }=require('electron')
const path =require('path')
var isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}

var menu= Menu.buildFromTemplate([{
    label:"Menu",
    submenu:[
        {label:'Adjust Notification Value'},
        {
            label:'CoinMarketCap',
            click(){
                shell.openExternal('http://coinmarketcap.com')
            }
        },
        {type:'separator'},
        {
            label:'Exit',
            click(){
                app.quit()
            }
        },
    ]
}])
Menu.setApplicationMenu(menu)


function createWindow(){
    let win= new BrowserWindow({
        width:1200,
        height:800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration: false,
            worldSafeExecureJavascript:true,
            contextIsolation:true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    ipcMain.handle('ping', () => 'pong')
    win.loadFile('./index.html')

    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' })
    }
}

// ipcMain.on('notify',(_,message)=>{

// })
app.whenReady().then(createWindow)


// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})




// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
