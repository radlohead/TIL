const dataList = ['a', 'bb', 'ccc']
const cFilter = (list, f) => {
    let temp = []
    list.forEach(item => {
        if (f(item)) temp.push(item)
    })
    return temp
}
cFilter(dataList, item => item.length > 1) // ['bb', 'ccc']
