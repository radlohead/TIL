const text = document.querySelector('.fancy')
const textContent = text.textContent
const splitText = textContent.split('')

text.innerHTML = ''
splitText.forEach(str => {
    text.innerHTML += `<span>${str}</span>`
})

let count = 0
let timer = null

const onTick = () => {
    const span = document.querySelectorAll('span')[count]
    span.classList.add('fade')
    count++
    if (count === splitText.length) {
        window.cancelAnimationFrame(timer)
        return
    }
    timer = window.requestAnimationFrame(onTick)
}
setTimeout(onTick, 50)
