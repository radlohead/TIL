class Queue {
    constructor() {
        this.list = []
    }
    enqueue(val) {
        this.list.push(val)
    }
    dequeue() {
        return this.list.shift()
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

console.log(queue.dequeue())
