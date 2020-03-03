const log = console.log
const arr = ['one', 'two', 'three', 'four']
const inArray = (...arg) => {
    const [list, key, index = 0] = arg
    const targetIndex = list.findIndex(item => item === key)
    if (!key) return -1
    else if (!index) return targetIndex
    return targetIndex === index ? targetIndex : -1
}
log(inArray(arr, 'one', 3)) //-1
log(inArray(arr, 'one')) //0
log(inArray(arr)) //-1
