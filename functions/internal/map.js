const dataList = ['a', 'bb', 'ccc']
const cMap = (list, f) => {
    let temp = []
    list.forEach(item => {
        temp.push(f(item))
    })
    return temp
}
cMap(dataList, item => item) // ["a", "bb", "ccc"]
