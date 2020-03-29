var book = {
    point: 123,
    get: function() {
        return this.point
    }
}
var obj = book.get.bind(book)
console.log(typeof obj) // function
var result = obj()
console.log(result) // 123
console.log(book.get()) // 123

console.dir('------------------------')

// 파라미터 병합
var book2 = {
    get: function() {
        return Array.prototype.slice.call(arguments)
    }
}
var obj2 = book2.get.bind(this, 10, 20)
var result2 = obj2(30, 40)
console.log(result2) // [ 10, 20, 30, 40 ]

console.dir('------------------------')

// 파라미터 병합2
var book3 = {
    get: function(...arg) {
        return Array.prototype.slice.call(arg.flat())
    }
}
var obj3 = book3.get.bind(this, [10, 20])
var result3 = obj3([30, 40])
console.log(result3) // [ 10, 20, 30, 40 ]
