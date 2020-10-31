const { ipcRenderer } = require('electron')

ipcRenderer.on('PRINT_TEXT', (_e, text) => {
    try {
        console.log('app text: ', text)
    } catch (e) {
        console.log('app error: ', e)
    }
})

ipcRenderer.on('RELOAD_RESPONSE', (e, text) => {
    try {
        console.log('reload text: ', text)
    } catch (e) {
        console.log('reload error: ', e)
    }
})

const $requestEventBtn = document.querySelector('#requestEventBtn')
$requestEventBtn.addEventListener('click', handleClickRequest)

const $reloadBtn = document.querySelector('#reloadBtn')
$reloadBtn.addEventListener('click', handleClickReload)

function handleClickRequest() {
    ipcRenderer.send('REQUEST_EVENT', 'request_event')
}

function handleClickReload() {
    ipcRenderer.send('RELOAD_EVENT', 'reload_event')
}
