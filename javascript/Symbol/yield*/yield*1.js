function* sports() {
    yield* [10, 20]
}
const obj = sports()
console.log(obj.next()) //{ value: 10, done: false } yield*는 배열을 순서대로 반환한다.
console.log(obj.next()) //{ value: 20, done: false }

function* point(count) {
    yield count + 5
    yield count + 10
}
function* sports2(value) {
    yield* point(value)
    yield value + 20
}
const obj2 = sports2(10)
console.log(obj2.next()) //{ value: 15, done: false } yield*를 사용할 경우 더이상 반환할 값이 없을때까지 호출한다.
console.log(obj2.next()) //{ value: 20, done: false }
console.log(obj2.next()) //{ value: 30, done: false }

function* sports3(point) {
    yield point
    yield* sports3(point + 10)
}
const obj3 = sports3(10)
console.log(obj3.next()) //{ value: 10, done: false } yield* 문에서 재귀호출을 하지만 재귀 호출이후에 yield를 만나므로 무한루프에 빠지지 않는다.
console.log(obj3.next()) //{ value: 20, done: false }
console.log(obj3.next()) //{ value: 30, done: false }
