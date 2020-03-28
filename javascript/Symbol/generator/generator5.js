const obj = {}
obj[Symbol.iterator] = function*() {
    yield 1
    yield 2
    yield 3
}
console.log([...obj]) //[ 1, 2, 3 ]

const gen = function*() {
    yield 10
    yield 20
}
const genObj = gen()
console.log(genObj.next()) //{ value: 10, done: false }

const genObj2 = gen()
console.log(genObj2.next()) //{ value: 10, done: false }

const obj2 = genObj[Symbol.iterator]()
console.log(obj2.next()) //{ value: 20, done: false } [Symbol.iterator]는 __proto__를 통해서 공유를 하기 때문에 next를 한 것을 공유할 수가 있게 된다.
