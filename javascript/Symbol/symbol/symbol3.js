// toString()
// Symbol을 생성했던 형태를 문자열로 변환하여 반환

console.log(Symbol('100').toString()) // Symbol(100)
const sym = Symbol.for('book')
console.log(sym.toString()) // Symbol(book)

try {
    console.log(Symbol() + 'ABC')
} catch {
    console.log('+로 연결 불가') // catch가 실행됨
}

console.dir('------------------------------')

// description
// 오브젝트의 주석, 설명을 반환
console.log(Symbol('sports').description) // sports
console.log(Symbol.for('book').description) // book
console.log(Symbol.iterator.description) // Symbol.iterator

console.dir('------------------------------')

// valueOf
console.log(Symbol('100').valueOf()) // Symbol(100)
console.log(Symbol.for('200').valueOf()) // Symbol(200) valueOf를 사용해도 값을 외부로 노출하지 않음

console.dir('------------------------------')

// getOwnPropertySymbols()

const obj = { point: 100 }
obj[Symbol('one')] = 200
obj[Symbol.for('two')] = 300
console.log(Object.getOwnPropertyNames(obj))

const list = Object.getOwnPropertySymbols(obj)
console.log(list) // [ Symbol(one), Symbol(two) ]
for (const sym of list) {
    console.log(`${sym.description}: ${obj[sym]}`) // one: 200, two: 300
}
