// forEach
const obj = new Map([
    ['one', 100],
    ['two', 200]
])
const callback = (value, key, map) => {
    console.log(`${key}, ${value}`) // one, 100  two, 200
}
obj.forEach(callback)

console.dir('------------------------')

// 콜백함수에서 this 사용
// forEach에서 this는 두번째 파라미터에 작성한 오브젝트를 참조한다
const obj2 = new Map([
    ['one', 100],
    ['two', 200]
])
function callback2(value, key, map) {
    console.log(value, key, this.check) // 100 one 50, 200 two 50
}
obj2.forEach(callback2, { check: 50 })

console.dir('------------------------')

// delete
const obj3 = new Map([
    ['one', 100],
    [{}, '오브젝트']
])
console.log(obj3.delete('one')) // true
console.log(obj3.delete({})) // false

const sports = {}
obj3.set(sports, '스포츠')
console.log(obj3.delete(sports)) // true

console.dir('------------------------')

// clear
// clear 메소드는 Map 인스턴스의 모든 entry를 지움
const obj4 = new Map([
    ['one', 100],
    ['two', 200]
])
console.log(obj4.size) // 2

obj4.clear()
console.log(obj4.size) // 0
obj4.set('add', '추가')
console.log(obj4.size) // 1
