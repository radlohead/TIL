// 값 캡슐화하기
// 원본
let defaultOwnerData = {
    firstName: '마틴',
    lastName: '파울러',
}
export function defaultOwner() {
    return defaultOwner
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg
}

// 캡슐화 1단계
const owner1 = defaultOwnerData()
asserts.equal('파울러', owner1.lastName, '처음 값 확인')
const owner2 = defaultOwner()
owner2.lastName = '파슨스'
asserts.equal('파슨스', owner1.lastName, 'owner2를 변경한 후') // 성공할까?

// 캡슐화 2단계
let defaultOwnerData = {
    firstName: '마틴',
    lastName: '파울러',
}
export function defaultOwner() {
    return Object.assign({}, defaultOwnerData)
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg
}

// 캡슐화 3단계
let defaultOwnerData = {
    firstName: '마틴',
    lastName: '파울러',
}
export function defaultOwner() {
    return new Person(defaultOwnerData)
}
export function setDefaultOwner(arg) {
    defaultOwnerData = arg
}

class Person {
    constructor(data) {
        this._lastName = data.lastName
        this._firstName = data.firstName
    }
    get lastName() {
        return this._lastName
    }
    get firstName() {
        return this._firstName
    }
}
