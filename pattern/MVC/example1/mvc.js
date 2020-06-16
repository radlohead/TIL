function View(controller) {
    this.controller = controller
    this.heading = document.querySelector('#heading')
    this.heading.innerText = controller.getModelHeading()
    this.heading.addEventListener('click', controller)
}
function Model() {
    this.heading = 'Hello'
}
function Controller(model) {
    const self = this
    this.model = model

    this.handleEvent = (e) => {
        e.stopPropagation()
        switch (e.type) {
            case 'click':
                self.clickHandler(e.target)
                break
            default:
                console.log(e.target)
        }
    }

    this.getModelHeading = () => {
        return self.model.heading
    }
    this.clickHandler = (target) => {
        self.model.heading = 'world'
        target.innerText = self.getModelHeading()
    }
}
function main() {
    const model = new Model()
    const controller = new Controller(model)
    const view = new View(controller)
}
main()
