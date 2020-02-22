const log = console.log
let myMap = new Map()
log(myMap) // Map {}

myMap.set('key1', 'value1')
myMap.set(2, () => {})
log(myMap) // Map { 'key1' => 'value1' }
log(myMap.size) // 1
log(myMap.get('key1')) // value1

const listMyMap = myMap.entries()
log(listMyMap) // [Map Entries] { [ 'key1', 'value1' ] }
log(myMap.has('key1')) // true
log(myMap.has('key2')) // false

log(myMap.keys()) // Map Iterator] { 'key1', 2 }
log(myMap.values()) // [Map Iterator] { 'value1', [Function] }

myMap.delete('key1')
log(myMap) // Map { 2 => [Function] }

myMap.clear()
log(myMap) // Map {}
