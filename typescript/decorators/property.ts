function printKey(target: any, propertyKey: string) {
    console.log(propertyKey) // someProp
}

class SomeClass {
    @printKey
    public someProp: string
    constructor() {}
}

let myClass = new SomeClass()
