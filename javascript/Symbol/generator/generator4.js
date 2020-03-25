function* sports(one) {
    let two = yield one
    let param = yield one + two
    yield param + one
}
const obj = sports(10)
console.log(obj.next()) //{ value: 10, done: false } 생성시에 10을 인자로 할당했으니 value가 10이 됨
console.log(obj.next()) //{ value: NaN, done: false } 이번에는 할당한 인자가 없는 상태에서 연산을 했으니 NaN을 반환
console.log(obj.next(20)) //{ value: 30, done: false } 20을 인자로 할당했으므로 param이 20 one이 10이므로 30을 반환
console.log(obj.next()) //{ value: undefined, done: true }
