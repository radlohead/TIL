const obj = new Set([1, 2, 'ABC'])
console.log(obj.size) // 3

for (let value of obj) {
    console.log(value) // 1, 2, ABC
}

console.dir('------------------------')

// Symbol.iterator
const obj2 = new Set(['one', () => {}])
const iter = obj2[Symbol.iterator]()
console.log(iter.next()) // { value: 'one', done: false }
console.log(iter.next()) // { value: [Function (anonymous)], done: false }
console.log(iter.next()) // { value: undefined, done: true }
