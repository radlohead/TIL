const fn = () => {}
const obj = new WeakSet([fn])
console.log(obj.has(fn)) // true

console.dir('------------------------')

// add
const obj2 = new WeakSet()
const fn2 = () => {}
obj2.add(fn2)
console.log(obj2.has(fn2)) // true

console.dir('------------------------')

// delete
const fn3 = () => {}
const obj3 = new WeakSet([fn3])
console.log(obj3.delete(fn3)) // true
console.log(obj3.has(fn3)) // false
