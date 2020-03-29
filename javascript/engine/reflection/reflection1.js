var book = {
    member: { name: 100 },
    point: { value: 200 }
}
function show(param) {
    for (var type in param) {
        if (typeof param[type] === 'object') {
            show(param[type])
        } else {
            console.log(`${type}: ${param[type]}`) // name: 100, value: 200
        }
    }
}
show(book)

console.dir('------------------------')

var member = {
    jan: {
        item: { title: 'JS북', amount: 100 },
        point: [10, 20, 30]
    },
    feb: {
        item: { title: 'JS북', amount: 200 },
        point: [40, 50, 60]
    }
}
function show2(param) {
    for (var type in param) {
        if (typeof param[type] === 'object') {
            show2(param[type])
        } else if (!Array.isArray(param)) {
            console.log(`${type}: ${param[type]}`) // title: JS북, amount: 200
        } else {
            const paramSum = param.reduce((prev, curr) => prev + curr)
            console.log(param, paramSum) // [ 10, 20, 30 ] 60, [ 40, 50, 60 ] 150
            return
        }
    }
}
show2(member)
