// yield를 배열에 담아서 사용하면 특정 상황에서 반환하는 value값이 배열로 반환된다.
function* sports() {
    return [yield yield]
}
const obj = sports()
console.log(obj.next()) //{ value: undefined, done: false }
console.log(obj.next(10)) //{ value: 10, done: false }
const last = obj.next(20)
console.log(last) //{ value: [ 20 ], done: true }
console.log(last.value) //[ 20 ]

// for of 문으로 반복
function* sports2(count) {
    while (true) {
        yield ++count
    }
}
for (let point of sports2(10)) {
    console.log(point) // 11 12 13
    if (point > 12) {
        break
    }
}
