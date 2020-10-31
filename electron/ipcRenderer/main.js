const { app, BrowserWindow, ipcMain } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.webContents.openDevTools()

    ipcMain.on('REQUEST_EVENT', (_e, eventName) => {
        win.webContents.send('PRINT_TEXT', 'request_event send_text!!')
        console.log('main: ', eventName)
    })

    win.webContents.on('did-finish-load', () => {
        console.log('did-finish-load!!')
    })
    win.webContents.on('did-fail-load', () => {
        console.log('did-fail-load')
    })
    win.webContents.on('devtools-opened', () => {
        console.log('devtools-opened')
    })
}

app.on('ready', () => {
    createWindow()
})
