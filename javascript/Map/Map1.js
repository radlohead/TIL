const obj = new Map([
    ['key', 'value'],
    [{ book: 200 }, '오브젝트'],
    [100, 'Number']
])
for (let keyValue of obj) {
    console.log(keyValue) // [ 'key', 'value' ], [ { book: 200 }, '오브젝트' ], [ 100, 'Number' ]  작성한 순서대로 호출됨
}

console.dir('------------------------')

const obj2 = new Map([
    [100, 'Number'],
    ['100', 'String']
])
for (let [key, value] of obj2) {
    console.log(`${key}: ${value}`) // 100: Number, 100: String  - key값의 타입이 다르기 때문에 중복이 아니기 때문에 정상적으로 호출
}

console.dir('------------------------')

const obj3 = new Map([
    [100, '첫 번째'],
    [100, '두 번째']
])
for (let [key, value] of obj3) {
    console.log(`${key}: ${value}`) // 100: 두 번째  - key값이 중복이면 나중에 오는 값으로 대체된다.
}

console.dir('------------------------')

// 코드를 잘못 작성한 형태
// new Map([[]]) 배열안에 배열을 담아야 하는데 그렇지 않기 때문에 아래 코드는 호출 실패
try {
    new Map(['one', 1])
} catch {
    console.log('[[one, 1]]') // 여기가 호출
}
const obj4 = new Map([{ five: 5 }])
for (let [key, value] of obj4) {
    console.log(`${key}: ${value}`) // undefined: undefined
}
