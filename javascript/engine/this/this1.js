function book() {
    'use strict'
    return this
}
var result = book()
console.log(result) // undefined

var obj = window.book()
console.log(obj === window) // true

console.dir('------------------------')

var book2 = {
    point: 100,
    member: {
        point: 200,
        get: function() {
            console.log(this === book2.member) // true
            console.log(this.point) // 200
        }
    }
}
// 메소드를 즉시 호출하면 member를 this가 가리키게 된다
book2.member.get()

console.dir('------------------------')

var book3 = {
    value: 123,
    get: function() {
        var value = 456
        console.log(this === window) // true  - true가 출력된 이유는 this가 window를 바라보기 때문
        console.log(this.value) // undefined
    }
}
// get을 즉시호출하지 않고 변수에 할당한 다음에 호출하게 되면 this는 window를 바라보게 된다
var fn = book3.get
fn()
