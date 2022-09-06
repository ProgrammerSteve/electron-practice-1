const {app,BrowserWindow,Menu,shell }=require('electron')

const closeBtn=document.getElementById('closeBtn');

closeBtn.addEventListener('click', function (event) {
    window.versions.closeAddWindow();
})