function log(constructor: any) {
    console.log(`New ${constructor.name} created!`) //New Yogurt created!
}
@log
class Yogurt {
    public flavor: string
    constructor(flavor: string) {
        this.flavor = flavor
    }
}

function log2(constructor: any) {
    return function(...args: any[]) {
        console.log(`New ${constructor.name} created!`)
        return new constructor(...args)
    } as typeof constructor
}
@log2
class Yogurt2 {
    public flavor: string
    constructor(flavor: string) {
        this.flavor = flavor
    }
}
new Yogurt2('strawberry') // New Yogurt2 created!
new Yogurt2('cherry') // New Yogurt2 created!
