const text = document.querySelector('.fancy')
const strText = text.textContent
const splitText = strText.split('')

text.textContent = ''
splitText.forEach(str => {
    text.innerHTML += `<span>${str}</span>`
})

let char = 0
let timer = null

const onTick = () => {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
        clearTick()
        return
    }
    timer = window.requestAnimationFrame(onTick)
}
const clearTick = () => {
    window.cancelAnimationFrame(timer)
}
const tickTask = () => {
    setTimeout(onTick, 50)
}
tickTask()
