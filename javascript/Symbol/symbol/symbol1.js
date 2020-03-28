const sym = Symbol('설명')
const obj = { [sym]: 100 }
console.log(obj[sym]) // 100
console.log(obj.sym) //undefined obj.sym 형태로는 호출이 안됨

const sym2 = Symbol('함수 이름')
const obj2 = {
    [sym](param) {
        return param
    }
}
console.log(obj2[sym](200)) // 200
