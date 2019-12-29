const element = document.getElementById('move_box')
const stopBtnEle = document.querySelector('#stop_btn')
let start = null
let myReq = null

const step = timestamp => {
    if (!start) start = timestamp
    let progress = timestamp - start
    element.style.left = `${Math.min(progress / 10, 300)}px`
    if (progress < 5000) {
        myReq = window.requestAnimationFrame(step)
    }
}

myReq = window.requestAnimationFrame(step)

stopBtnEle.addEventListener('click', () => {
    window.cancelAnimationFrame(myReq)
})
