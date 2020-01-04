const text = document.querySelector('.fancy')
const strText = text.textContent
const splitText = strText.split('')

text.textContent = ''
splitText.forEach(str => {
    text.innerHTML += `<span>${str}</span>`
})

let char = 0

const onTick = () => {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
        complete()
        return
    }
}
const complete = () => {
    clearInterval(timer)
    timer = null
}

let timer = setInterval(onTick, 50)
