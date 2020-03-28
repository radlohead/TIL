const sports = function() {}
const obj = new sports()
console.log(obj.toString()) //[object Object]

sports.prototype[Symbol.toStringTag] = '농구'
console.log(obj.toString()) //[object 농구] Symbol.toStringTag를 이용하면 [object Object]의 이름을 정의할 수 있다
