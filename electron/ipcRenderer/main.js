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
        win.webContents.send('PRINT_TEXT', 'send_text')
        console.log('main: ', eventName)
    })
}

app.on('ready', () => {
    createWindow()
})
