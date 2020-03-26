function* sports(count) {
    while (true) {
        yield ++count
    }
}
const obj = sports(10)
console.log(obj.next()) //{ value: 11, done: false }
console.log(obj.return(70)) //{ value: 70, done: true }  return 문을 만나면 이터레이터는 즉시 종료된다.
console.log(obj.next(50)) //{ value: undefined, done: true }

console.dir('---------------------------')

function* sports2() {
    try {
        yield 10
    } catch (message) {
        yield message
    }
    yield 20
}
const obj2 = sports2()
console.log(obj2.next()) //{ value: 10, done: false }
console.log(obj2.throw('에러 발생')) //{ value: '에러 발생', done: false }  throw는 에러로 간주되므로 catch문을 실행하고 제네레이터도 종료시키지 않는다. 그 증거로 done이 false를 반환한다.
console.log(obj2.next()) //{ value: 20, done: false }

console.dir('---------------------------')

function* sports3() {
    throw '에러 발생'
    yield 10
}
const obj3 = sports3()
try {
    const result = obj3.next()
} catch (message) {
    console.log(message) // 에러 발생
}
console.log(obj3.next()) //{ value: undefined, done: true } 제네레이터 함수내에서 throw를 반환하면 제네레이터가 종료되는걸 확인할 수 있다.
