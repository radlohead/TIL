function printIndex(target: any, propertyKey: string, index: number) {
    console.log('Parameter index is: ' + index) // Parameter index is: 2
}

class SomeClass {
    constructor() {}
    public someMethod(
        first: string,
        second: string,
        @printIndex third: string
    ) {}
}

let myClass = new SomeClass()
