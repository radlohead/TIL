const { ipcRenderer } = require('electron')

ipcRenderer.on('PRINT_TEXT', (_e, text) => {
    try {
        console.log('app text: ', text)
    } catch (e) {
        console.log('app error: ', e)
    }
})

const $requestEventBtn = document.querySelector('#requestEventBtn')
$requestEventBtn.addEventListener('click', () => handleClickRequestEvent())

function handleClickRequestEvent() {
    ipcRenderer.send('REQUEST_EVENT', 'request_event')
}
