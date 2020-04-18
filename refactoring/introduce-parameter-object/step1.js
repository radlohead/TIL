// 매개변수 객체 만들기

const station = {
    name: 'ZB1',
    readings: [
        { temp: 47, time: '2016-11-10 09:10' },
        { temp: 53, time: '2016-11-10 09:20' },
        { temp: 58, time: '2016-11-10 09:30' },
        { temp: 53, time: '2016-11-10 09:40' },
        { temp: 51, time: '2016-11-10 09:50' },
    ],
}

// 변경 전
function readingsOutsideRange(station, min, max) {
    return station.readings.filter((r) => r.temp < min || r.temp > max)
}
readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
)

// 변경 후
function readingsOutsideRange(station, range) {
    return station.readings.filter(
        // 기존 로직을 contains 메소드를 생성해서 호출
        // return r.temp < range.min || r.temp > range.max
        (r) => !range.contains(r.temp)
    )
}

class NumberRange {
    constructor(min, max) {
        this._data = { min, max }
    }
    get min() {
        return this._data.min
    }
    get max() {
        return this._data.max
    }
    contains(arg) {
        return arg >= this.min && arg <= this.max
    }
}
const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
)
readingsOutsideRange(station, range)
