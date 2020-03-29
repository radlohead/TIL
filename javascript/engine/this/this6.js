// this와 콜백 함수
var obj = { value: 100 }
var data = [5, 6, 7]

function callback(element, index, data) {
    // get 함수 인자에 data 배열을 할당했기 때문에 element는 5, 6, 7이 순차적으로 호출되며
    // map의 두번째 인자에 obj를 할당했기 때문에 this.value는 100이 된다
    return element + this.value
}
function get(data) {
    return data.map(callback, obj) // map의 두번째 인자는 optional에 해당하며 this에 해당되는 값을 할당한다
}
var result = get(data)
console.log(result) // [ 105, 106, 107 ]
