class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }
    add(value) {
        const node = new Node(value)
        let current = this.head
        if (!current) {
            this.head = node
            ++this.length
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
            ++this.length
            return node
        }
    }
    search(position) {
        let current = this.head
        let count = 0
        while (count < position) {
            current = current.next
            ++count
        }
        return current
    }
    remove(position) {
        let current = this.head
        let before
        let remove
        let count = 0
        if (position === 0) {
            remove = this.head
            this.head = this.head.next
            --this.length
            return remove
        } else {
            while (count < position) {
                before = current
                ++count
                current = current.next
            }
            remove = current
            before.next = remove.next
            --this.length
            return remove
        }
    }
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.remove(1)
console.log(list.search(1))
console.log(list)
