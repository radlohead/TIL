const log = console.log
const zip = (...arg) =>
    arg.map((doubleList, i, arr) => doubleList.map((list, j) => arr[j][i]))
const result = zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true])
log(result[0]) //[ 1, 'a', true ]
log(result[1]) //[ 2, 'b', false ]
log(result[2]) // [ 3, 'c', true ]
