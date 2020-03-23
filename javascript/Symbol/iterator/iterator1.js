const iterator = (data, index = 0) => {
    return {
        next: () => {
            return {
                value: data[index++],
                done: index > data.length
            }
        }
    }
}
const iter = iterator([1, 2, 3])
console.log(iter.next()) //{ value: 1, done: false }
console.log(iter.next()) //{ value: 2, done: false }
console.log(iter.next()) //{ value: 3, done: false }
console.log(iter.next()) //{ value: undefined, done: true }
