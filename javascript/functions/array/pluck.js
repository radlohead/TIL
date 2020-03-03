const log = console.log
const objArr = [
    { abc: 1, def: 2, ghi: 3 },
    { abc: 4, def: 5, ghi: 6 },
    { abc: 7, def: 8, ghi: 9 }
]
const arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const pluck = (arr, key) => arr.map(obj => obj[key])
log(pluck(objArr, 'abc')) //[ 1, 4, 7 ]
log(pluck(arr2d, 2)) //[ 3, 6, 9 ]
