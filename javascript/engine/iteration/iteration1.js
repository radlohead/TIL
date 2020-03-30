// 이터레이션
// 이터레이션을 사용하는 이유는 확장성 때문임
// 개발자 코드로 프로토콜을 맞추면 이터레이션 할수 없는 오브젝트를 이터레이션 할수 있또록 만들수 있음
const list = [10, 20]
for (let value of list) {
    console.log(value) // 10, 20
}
const obj = list[Symbol.iterator]()
console.log(obj.next()) // { value: 10, done: false }
console.log(obj.next()) // { value: 20, done: false }
console.log(obj.next()) // { value: undefined, done: true }

console.dir('------------------------')

const list2 = [10, 20]
console.log(list2[Symbol.iterator]) //[Function: values]

const obj2 = { one: 10, two: 20 }
console.log(obj2[Symbol.iterator]) // undefined  - Object는 이터러블 오브젝트가 아니다

const obj3 = Object.entries(obj2)[Symbol.iterator]()
console.log(obj3.next()) // { value: [ 'one', 10 ], done: false }
console.log(obj3.next()) // { value: [ 'two', 20 ], done: false }
console.log(obj3.next()) // { value: undefined, done: true }
