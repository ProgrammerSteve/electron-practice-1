// const electron=require('electron')
// const path=require('path')
// const BrowserWindow=electron.remote.BrowserWindow

// const notifyBtn=document.getElementById('notifyBtn')

// notifyBtn.addEventListener('click',function(event){
//     console.log('clicked...')
//     const modalPath=path.join('file://',__dirname, 'add.html')
//     let win= new BrowserWindow({
//         width: 400,
//         height: 200,
//         frame:false
//       })


//     win.on('close',function(){
//         win=null
//     })
//     // win.loadURL(modalPath)
//     win.loadFile('src/add.html')
//     win.show()
// })

import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/app';
import './assets/css/main.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);