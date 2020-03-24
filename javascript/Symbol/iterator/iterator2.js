// 문자열은 iterable이므로 iterator를 생성할 수 있다.
const iter1 = 'go'[Symbol.iterator]()
console.log(iter1.next()) //{ value: 'g', done: false }
console.log(iter1.next()) //{ value: 'o', done: false }
console.log(iter1.next()) //{ value: undefined, done: true }

function* generator1() {
    yield 1
    yield 2
}
const gen1 = generator1()[Symbol.iterator]()
console.log(gen1.next()) //{ value: 1, done: false }
console.log(gen1.next()) //{ value: 2, done: false }
console.log(gen1.next()) //{ value: undefined, done: true }
