const log = console.log
const range = (start, stop, step = 1) => {
    const arr = []
    let flag

    if (!stop) {
        stop = start || 0
        start = 0
    }
    flag = step >= 1 ? 1 : -1
    stop *= flag

    for (; start * flag < stop; start += step) {
        arr.push(start)
    }
    return arr
}
log(range(5)) // [0, 1, 2, 3, 4]
log(range(1, 5)) // [1,2,3,4]
log(range(5, 1)) // [4,3,2,1]
log(range(2, 10, 2)) // [2,4,6,8]
log(range(10, 2, -2)) // [10,8,6,4]
