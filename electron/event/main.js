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

// 애플리케이션이 윈도우를 닫기 직전에 발생합니다. Event.preventDefault()를 호출하면 기본 동작인 애플리케이션 종료를 하지 않습니다.
app.on('before-quit', () => {
    console.log('before-quit')
})

// 모든 윈도우가 닫히고 애플리케이션이 종료될 때 발생한다. Event.preventDefault()를 호출하면 기본 동작인 애플리케이션 종료를 하지 않습니다.
app.on('will-quit', () => {
    console.log('will-quit')
})
