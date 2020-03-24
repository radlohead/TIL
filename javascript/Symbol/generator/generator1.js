const obj = {
    *gen1() {
        yield 1
        yield 2
    }
}
const gen1 = obj.gen1()
console.log(gen1.next()) //{ value: 1, done: false }
console.log(gen1.next()) //{ value: 2, done: false }
console.log(gen1.next()) //{ value: undefined, done: true }

function* generator1() {
    yield 1
    yield 2
    yield 3
}

for (const v of generator1()) {
    console.log(v) // 1 2 3
}
