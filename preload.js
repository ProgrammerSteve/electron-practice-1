// contextBridge.exposeInMainWorld(
//     "api", {
//         send: (channel, data) => {
//             // whitelist channels
//             let validChannels = ["toMain"];
//             if (validChannels.includes(channel)) {
//                 ipcRenderer.send(channel, data);
//             }
//         },
//         receive: (channel, func) => {
//             let validChannels = ["fromMain"];
//             if (validChannels.includes(channel)) {
//                 // Deliberately strip event as it includes `sender` 
//                 ipcRenderer.on(channel, (event, ...args) => func(...args));
//             }
//         }
//     }
// );








// const {
//     contextBridge,
//     ipcRenderer
// } = require("electron");

// contextBridge.exposeInMainWorld("electron",{
//     notificationApi: {
//         sendNotification(message){
//             console.log(message)
//             ipcRenderer.send('notify',message)
//         }
//     }  
// });



const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  addWindow: ()=>ipcRenderer.invoke('add'),
  closeAddWindow: ()=>ipcRenderer.invoke('close')
})
