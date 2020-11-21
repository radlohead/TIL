import '../css/style.scss'

class Square {
    constructor() {
        this.root = document.querySelector('#root')
    }
    render() {
        this.root.innerHTML += `
            <h1 class="title">gsap example</h1>
        `
    }
    task() {
        this.render()
    }
}

const test = new Square()
test.task()
