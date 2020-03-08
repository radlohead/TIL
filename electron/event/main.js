const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    console.log('ready')
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    )
    win.webContents.openDevTools()
}

app.on('ready', createWindow)

// will-finish-launching는 ready보다 먼저 실행된다.
app.on('will-finish-launching', () => {
    console.log('will-finish-launching')
})
