document.querySelector('#move_btn').addEventListener('click', () => {
    scroll()
})

const scroll = () => {
    let scrollY = window.scrollY + 10 || 0
    let ref = null

    if (scrollY > 500) {
        window.cancelAnimationFrame(ref)
    } else {
        window.scrollTo({ top: scrollY })
        ref = window.requestAnimationFrame(scroll)
    }
}
