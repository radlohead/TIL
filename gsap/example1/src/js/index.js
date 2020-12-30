import '../css/style.scss'

MorphSVGPlugin.convertToPath('circle, rect, polygon')

const tl = gsap.timeline({
    repeat: 20,
    repeatDelay: 0.3,
    yoyo: true,
    defaults: { duration: 1 },
})

tl.to('#triangle', { morphSVG: '#a' }, '+=0.5')
    .to('#square', { morphSVG: '#b' })
    .to('#circle', { morphSVG: '#c' })
    .timeScale(3)
