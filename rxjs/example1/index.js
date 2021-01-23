// const observable = Rx.Observable.create((observer) => {
//     observer.next('hello')
//     observer.next('world')
// })
// observable.subscribe((val) => console.log(val))

// const interval = Rx.Observable.interval(1000)
// interval.subscribe((num) => console.log(new Date().getSeconds()))

// const cold = Rx.Observable.create((observer) => {
//     observer.next(Math.random())
// })
// const hot = cold.publish()
// cold.subscribe((a) => console.log(`Subscriber A: ${a}`))
// cold.subscribe((b) => console.log(`Subscriber B: ${b}`))
// hot.connect()

// const interval = Rx.Observable.interval(500).finally(() =>
//     console.log('All done!')
// )
// const subscription = interval.subscribe((x) => console.log(x))
// setTimeout(() => {
//     subscription.unsubscribe()
// }, 3000)

// const jsonString = '{"type": "Dog", "breed": "Pug"}'
// const apiCall = Rx.Observable.of(jsonString)
// apiCall
//     .map((json) => JSON.parse(json))
//     .subscribe((obj) => {
//         console.log(obj.type)
//         console.log(obj.breed)
//     })

// const names = Rx.Observable.of('Simon', 'Farfunkle')
// names
//     .do((name) => console.log(name))
//     .map((name) => name.toUpperCase())
//     .do((name) => console.log(name))
//     .subscribe()

// const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2)
// numbers.filter((n) => n <= 0).subscribe((n) => console.log(n))

// const numbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2)
// numbers.last().subscribe((n) => console.log(n))

// const mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')
// mouseEvents.debounceTime(1000).subscribe((e) => console.log(e.type))

// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks
//     .map((e) => parseInt(Math.random() * 10))
//     .do((score) => console.log(`Click scored + ${score}`))
//     .scan((highScore, score) => highScore + score)
//     .subscribe((highScore) => console.log(`High Score ${highScore}`))

// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks
//     .switchMap((click) => {
//         return Rx.Observable.interval(500)
//     })
//     .subscribe((i) => console.log(i))

// const interval = Rx.Observable.interval(500)
// const notifier = Rx.Observable.timer(2000)
// interval
//     .takeUntil(notifier)
//     .finally(() => console.log('Complete!'))
//     .subscribe((i) => console.log(i))

// const names = Rx.Observable.of('Bob', 'Jeff', 'Doug', 'Steve')
// names
//     .takeWhile((name) => name !== 'Doug')
//     .finally(() => console.log('Complete! I found Doug'))
//     .subscribe((i) => console.log(i))

// const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows')
// const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns').delay(2000)
// const combo = Rx.Observable.forkJoin(yin, yang)
// combo.subscribe((arr) => console.log(arr))

// const observable = Rx.Observable.create((observer) => {
//     observer.next('good')
//     observer.next('great')
//     observer.next('grand')

//     throw 'catch me!'

//     observer.next('wonderful')
// })
// observable
//     .catch((err) => console.log(`Error caught: ${err}`))
//     .retry(2)
//     .subscribe((val) => console.log(val))

// const subject = new Rx.Subject()
// const subA = subject.subscribe((val) => console.log(`Sub A: ${val}`))
// const subB = subject.subscribe((val) => console.log(`Sub B: ${val}`))
// subject.next('Hello')
// setTimeout(() => {
//     subject.next('World')
// }, 1000)

// const observable = Rx.Observable.fromEvent(document, 'click')
// const clicks = observable.do((_) => console.log('Do One Time!'))
// const subject = clicks.multicast(() => new Rx.Subject())
// const subA = subject.subscribe((c) => console.log(`Sub A: ${c.timeStamp}`))
// const subB = subject.subscribe((c) => console.log(`Sub B: ${c.timeStamp}`))
// subject.connect()
