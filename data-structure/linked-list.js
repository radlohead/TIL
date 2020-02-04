class List {
    constructor() {
        this.list = []
    }
    append(data) {
        this.list.push(data)
    }
    removeIndex(index) {
        this.list.splice(index, 1)
    }
    indexOf(data) {
        const targetData = this.list[data]
        return targetData ? targetData : -1
    }
    insert(index, data) {
        this.list.splice(index, 0, data)
    }
    isEmpty() {
        return this.list.length > 0 ? true : false
    }
    size() {
        return this.list.length
    }
}
// append(데이터): 리스트의 맨 끝에 데이터를 추가한다.
// removeIndex(위치): 해당 위치에 있는 데이터를 삭제한다.
// indexOf(데이터): 해당 데이터의 인덱스를 반환한다. 존재하지 않을 경우 결과 값은 -1이다.
// remove(데이터): 데이터를 삭제한다.
// insert(위치, 데이터): 해당 위치에 데이터를 삽입한다.
// isEmpty(): 데이터가 하나도 없다면 true를, 그 외엔 false를 반환한다.
// size(): 데이터 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.
const list = new List()
list.append(1) // [1]
list.append(2) // [1,2]
list.append(3) //[1,2,3]
list.append(4) //[1,2,3,4]
list.removeIndex(2) //[1,2,4]
list.indexOf(2) //4
list.insert(2, 3) //[1,2,3,4]
list.isEmpty() //true
list.size() //4
