function* generator1() {
    yield 1
    yield 2
}

// yield* 표현식을 사용하면 다른 제네레이터 함수에서 넘겨준 값을 다시 넘겨줄 수 있다.
function* generator2() {
    yield* generator1()
    yield* generator1()
}

for (const v of generator2()) {
    console.log(v) // 1 2 1 2
}

function* infinityGenerator(count) {
    while (true) yield count++
}
const infinityGen = infinityGenerator(1)
console.log(infinityGen.next()) //{ value: 1, done: false }
console.log(infinityGen.next()) //{ value: 2, done: false }
console.log(infinityGen.next()) //{ value: 3, done: false }
