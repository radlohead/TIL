// entries() 를 이용해서 이터레이터 오브젝트 생성, 반환
const obj = new Map([
    ['one', 100],
    ['two', 200]
])
const iter = obj.entries()
console.log(iter.next()) // { value: [ 'one', 100 ], done: false }
console.log(iter.next()) // { value: [ 'two', 200 ], done: false }
console.log(iter.next()) // { value: undefined, done: true }

console.dir('------------------------')

// keys 메소드를 이용하면 value에 키값만 반환받는다
const obj2 = new Map([
    ['one', 100],
    ['two', 200]
])
const iter2 = obj2.keys()
console.log(iter2.next()) // { value: 'one', done: false }
console.log(iter2.next()) // { value: 'two', done: false }
console.log(iter2.next()) // { value: undefined, done: true }

console.dir('------------------------')

// values 메소드를 사용하면 value에 값만 반환받는다
const obj3 = new Map([
    ['one', 100],
    ['two', 200]
])
const iter3 = obj3.values()
console.log(iter3.next()) // { value: 100, done: false }
console.log(iter3.next()) // { value: 200, done: false }
console.log(iter3.next()) // { value: undefined, done: true }

console.dir('------------------------')

// Symbol.iterator 이터레이터 오브젝트를 생성해서 반환하므로 순서대로 값을 읽는다
const obj4 = new Map([
    ['one', 100],
    ['two', 200]
])
const iter4 = obj[Symbol.iterator]()
console.log(iter4.next()) // { value: [ 'one', 100 ], done: false }
console.log(iter4.next()) // { value: [ 'two', 200 ], done: false }
console.log(iter4.next()) // { value: undefined, done: true }
