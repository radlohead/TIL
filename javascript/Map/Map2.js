// set
let obj = new Map()
obj.set('one', 100)
obj.set({}, '오브젝트')
obj.set(function() {}, 'Function')
obj.set(new Number('100'), '인스턴스')
obj.set(NaN, 'Not a Number')

for (let [key, value] of obj) {
    console.log(`${key}: ${value}`)
    // one: 100
    // [object Object]: 오브젝트
    // function() {}: Function
    // 100: 인스턴스
    // NaN: Not a Number
}

console.dir('------------------------')

// set은 키 값이 같으면 나중에 오는 value로 변경
let obj2 = new Map()
const book = {}
obj2.set(book, '첫 번째')
obj2.set(book, '두 번째')
for (let [key, value] of obj2) {
    console.log(`${key}: ${value}`) // [object Object]: 두 번째
}

console.dir('------------------------')

// get
let obj3 = new Map([
    ['one', 100],
    ['200', 'String 타입']
])
console.log(obj3.get('one')) // 100
console.log(obj3.get('two')) // undefined  - 해당 키 값이 없으므로 호출 실패
console.log(obj3.get(200)) // undefined  - 타입이 다르기 때문에 호출 실패

// has
const obj4 = new Map([['one', 100]])
console.log(obj.has('one')) // true
console.log(obj.has('two')) // false
