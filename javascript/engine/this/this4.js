'use strict'

// array
var value = 100
function get(param) {
    return param + this.value
}
var result = get.call(this, 20)
console.log(result) // 120 - call에 첫번째 삽입된 this는 window이고 value 변수도 전역상태에 있기 때문에 get함수에서 this.value는 문제없이 호출된다

console.dir('------------------------')

// object
var get2 = function(value) {
    return this.base * this.rate + value
}
var value = { base: 20, rate: 30 }
var result = get2.call(value, 50)
console.log(result) // 650 - get2.call에 첫번째 인자로 value 객체를 할당했기 때문에 get2 함수에서 this는 value를 바라보기 때문에 정상적으로 호출이 된다

console.dir('------------------------')

// number
// call에 숫자를 할당하면 에러가 발생해야 하지만 Number 인스턴스를 생성하고
// 123을 프리미티브 값으로 설정하고 this가 Number 인스턴스를 참조한다
function get3() {
    return this.valueOf()
}
var result = get3.call(123)
console.log(result) // 123

console.dir('------------------------')

var book = {
    value: 123,
    point: {
        value: 456,
        get: function() {
            console.log(this.value)
        }
    }
}
book.point.get.call(book) // 123 - this가 book 객체를 바라보기 때문에 그 아래 value가 출력
book.point.get.call(book.point) // 456 - this가 point를 바라보기 때문에 그 아래 value가 출력
