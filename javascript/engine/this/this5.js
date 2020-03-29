var obj = { 0: 10, 1: 20, 2: 30 }
var data = [4, 5, 6]

function get() {
    for (k = 0; k < arguments.length; k++) {
        // apply에 첫번째 인자에 obj를 할당했으므로 this는 obj이고
        // apply 두번째 인자에 data를 할당했으므로 arguments는 data에 해당한다
        console.log(arguments[k] + this[k]) // 14, 25, 36
    }
}
get.apply(obj, data)
