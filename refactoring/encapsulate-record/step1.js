// 레코드 캡슐화하기

// 변경 전
// 프로그램 전체에서 사용되는 상수를 예로 들어보자
const organization = { name: '애크미 구스베리', country: 'GB' }

// 이 상수는 프로그램 곳곳에서 레코드 구조로 사용하는 객체로서 다음과 같이 읽고 쓴다.

result += `<h1>${organization.name}</h1>` // 읽기 예
orientation.name = newName // 쓰기 예

// 변경 후
// 가장 먼저 이 상수를 캡슐화해보자
function getRawDataOfOrganization() {
    return orientation
}

// 그리고 읽고 쓰는 코드는 다음처럼 바뀐다.
result += `<h1>${getRawDataOfOrganization().name}</h1>` // 읽기 예
getRawDataOfOrganization().name = newName // 쓰기 예

// 캡슐화는 했지만 클래스로 작성하는 게 더 좋은 방법이다.
class Organization {
    constructor(data) {
        this._name = data.name
        this._country = data.country
    }
    get name() {
        return this._name
    }
    set name(aString) {
        this._name = aString
    }
    get country() {
        return this._country
    }
    set country(aCountryCode) {
        this._country = aCountryCode
    }
}
const organization = new Organization({
    name: '애크미 구스베리',
    country: 'GB',
})
function getOrganization() {
    return organization
}
