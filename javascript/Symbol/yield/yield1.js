// yield 반복, 다수의 yield 처리
let status = true
function* sports() {
    let count = 0
    while (status) {
        yield ++count
    }
}
const obj = sports()
// console.log(obj.next()) //{ value: 1, done: false }
// console.log(obj.next()) //{ value: 2, done: false }
// status = false
// console.log(obj.next()) //{ value: undefined, done: true }

// 다수의 yield 처리
function* sports2() {
    return yield yield yield
}
const obj2 = sports2()
console.log(obj2.next()) //{ value: undefined, done: false }
console.log(obj2.next(10)) //{ value: 10, done: false }
console.log(obj2.next(20)) //{ value: 20, done: false }
console.log(obj2.next(30)) //{ value: 30, done: true }  // 앞에서 next를 3번 호출해서 yield는 모두 실행되었지만 return문이 남아있으므로 30을 반환 return이 없다면 undefind를 반환
