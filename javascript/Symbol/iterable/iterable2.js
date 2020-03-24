function range(start = 0, end = Infinity, step = 1) {
    return {
        currentValue: start,
        [Symbol.iterator]() {
            return {
                next: () => {
                    if (this.currentValue < end) {
                        const value = this.currentValue
                        this.currentValue += step
                        return {
                            done: false,
                            value
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
}
const gen = range()[Symbol.iterator]()
console.log(gen.next()) //{ done: false, value: 0 }
console.log(gen.next()) //{ done: false, value: 1 }
console.log(gen.next()) //{ done: false, value: 2 }
