// 변수 이름 바꾸기

// 변경 전
let tpHd = 'untitled'
result += `<h1>${tpdh}</h1>`
tpHd = obj['articleTitle']

// 변경 후
result += `<h1>${title()}</h1>`

setTitle(obj['articleTitle'])
function title() {
    return tpHd
}
function setTitle(arg) {
    tpHd = arg
}
