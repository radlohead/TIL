const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
// const os = require('os')
const log = console.log

// 전역객체로 선언
let win

function createWindow() {
    // 브라우저 창을 만듬
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // index.html을 로드
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    // 개발자도구 오픈
    win.webContents.openDevTools()

    // 윈도우가 닫힐 때 발생하는 이벤트
    win.on('closed', () => {
        win = null
    })
}

// 사용 준비가 완료되면 윈도우를 오픈
app.on('ready', createWindow)

// 모든 창이 닫히면 종료
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    // mac에서 독 아이콘을 클릭하면 오픈
    if (win === null) {
        createWindow()
    }
})
