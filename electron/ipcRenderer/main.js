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

    ipcMain.on('REQUEST_EVENT', (e, eventName) => {
        win.webContents.send('PRINT_TEXT', 'request_event send_text!!')
        console.log('main: ', eventName)
    })

    ipcMain.on('RELOAD_EVENT', (e, eventName) => {
        win.webContents.send('RELOAD_RESPONSE', 'reload_response!!')
        win.webContents.reload()
        console.log('main: ', eventName)
    })

    win.webContents.on('did-finish-load', () => {
        console.log('did-finish-load')
    })
    win.webContents.on('did-fail-load', () => {
        console.log('did-fail-load')
    })
    win.webContents.on('devtools-opened', () => {
        console.log('devtools-opened')
    })
    win.webContents.on('dom-ready', () => {
        console.log('dom-ready')

        const getURL = win.webContents.getURL()
        const getTitle = win.webContents.getTitle()
        console.log('getURL: ', getURL)
        console.log('getTitle: ', getTitle)
    })
    win.webContents.on('close', () => {
        console.log('close')
        console.log('isDestroyed: ', win.webContents.isDestroyed())
    })
}

app.on('ready', () => {
    createWindow()
})
