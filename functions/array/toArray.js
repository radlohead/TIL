const log = console.log
const arrayLike = {
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
    length: 4
}
const toArray = arr => {
    delete arr.length
    return Object.values(arr)
}
log(toArray(arrayLike)) // one,two,three,four
