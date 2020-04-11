// 매개변수 추가하기

// step1 - addReservation 메서드에 매개변수를 추가하기전에 동일한 함수를 생성
class Book {
    constructor() {}
    addReservation(customer) {
        this.zz_addReservation(customer)
    }
    zz_addReservation(customer) {
        this._reservations.push(customer)
    }
}

// step2 - 새로 생성한 메서드에 매개변수를 추가한다.
class Book {
    constructor() {}
    addReservation(customer) {
        this.zz_addReservation(customer, false)
    }
    zz_addReservation(customer, isPriority) {
        // 새로운 매개변수를 assert 메서드에서 처리하기 때문에 새로운 매개변수를 빠뜨린 부분을 찾는데 도움이 된다.
        assert(isPriority === true || isPriority === false)
        this._reservations.push(customer)
    }
}
