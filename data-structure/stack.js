class Stack {
    constructor() {
        this.list = []
    }
    push(val) {
        this.list.push(val)
    }
    pop() {
        return this.list.pop()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)

console.log(stack.pop())
