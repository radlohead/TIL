const sports = {
    base: 'ball',
    [Symbol.match](value) {
        return this.base.indexOf(value) < 0 ? '없음' : '있음'
    }
}
console.log('al'.match(sports)) //있음 ball에 al이 있으므로 있음을 반환
console.log('al2'.match(sports)) //있음 ball에 al2가 없으므로 없음을 반환

try {
    '/book/'.startsWith(/book/)
} catch {
    console.log('정규 표현식으로 처리') //정규 표현식으로 처리
}

let check = /book/
check[Symbol.match] = false // false로 선언해야 //를 패턴으로 인식하지 않고 문자열로 인식
console.log('/book/'.startsWith(check)) //true
