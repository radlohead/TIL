const iterable = (count = 0, length) => {
    return {
        [Symbol.iterator]: () => {
            return {
                next: () => {
                    return {
                        value: count++,
                        done: count > length
                    }
                }
            }
        }
    }
}
const iter = iterable(0, 5)
for (const v of iter) {
    console.log(v) // 0 1 2 3 4
}
