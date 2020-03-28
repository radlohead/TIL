// for는 {key: value} 형태로 저장

const one = Symbol.for('sports')
const two = Symbol.for('sports')
console.log(one) // Symbol(sports)
console.log(one === two) // true - 키 값만 비교하기 때문에 true가 된다

const three = Symbol.for('book')
const four = Symbol.keyFor(three)
console.log(four) // book - keyFor를 이용하면 심볼에 저장된 key값을 가져온다
