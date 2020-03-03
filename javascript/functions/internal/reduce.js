const numList = [1, 2, 3]
const cReduce = (list, f) => {
    let temp = null
    list.forEach(item => {
        temp = f(temp, item)
    })
    return temp
}
cReduce(numList, (acc, cur) => acc + cur) // 6
