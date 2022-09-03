// // Modules to control application life and create native browser window
// const { app, Menu,ipcMain,shell } = require('electron')
// require('@electron/remote/main').initialize()
// const { BrowserWindow } = require("@electron/remote")
// const path = require('path')
// var menu= Menu.buildFromTemplate([{
//     label:"Menu",
//     submenu:[
//         {label:'Adjust Notification Value'},
//         {
//             label:'CoinMarketCap',
//             click(){
//                 shell.openExternal('http://coinmarketcap.com')
//             }
//         },
//         {type:'separator'},
//         {
//             label:'Exit',
//             click(){
//                 app.quit()
//             }
//         },
//     ]
// }])
// Menu.setApplicationMenu(menu)
// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//         nodeIntegration: true,
//         contextIsolation: false,
//         // enableRemoteModule: false, // turn off remote
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })
//   // and load the index.html of the app.
// //   mainWindow.loadFile(path.join(__dirname, "src/index.html"));
//   mainWindow.loadFile('src/index.html')
//   // Open the DevTools.
//   mainWindow.webContents.openDevTools()
// }
// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow()
//   app.on('activate', () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })
// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })
// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.
//   // "extraResources": [
//   //   "./node_modules/@electron/remote/**"
//   // ],

const {app,BrowserWindow }=require('electron')
const path =require('path')
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}

function createWindow(){
    const win= new BrowserWindow({
        width:1200,
        height:800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration: false,
            worldSafeExecureJavascript:true,
            contextIsolation:true,
            // preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('./index.html')
    win.webContents.openDevTools()
}

// ipcMain.on('notify',(_,message)=>{

// })
app.whenReady().then(createWindow)