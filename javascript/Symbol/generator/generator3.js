const fn = new Function('one', 'return one')
console.log(fn(100)) // 100

// 제네레이터에서 위의 함수처럼 constructor를 사용하는 방법
const create = Object.getPrototypeOf(function*() {}).constructor
const sports = new create('one', 'yield one')
const obj = sports(100)
console.log(obj.next()) //{ value: 100, done: false }
console.log(obj.next()) //{ value: undefined, done: true }
