// 중첩된 레코드 캡슐화 하기

const customerData = {
    '1920': {
        name: '마틴 파울러',
        id: '1920',
        usages: {
            '2016': {
                '1': 50,
                '2': 55,
            },
            '2015': {
                '1': 70,
                '2': 63,
            },
        },
        '38673': {
            name: '닐 포드',
            id: '38673',
        },
    },
}
// 변경 전
// 쓰기 예
customerData[customerID].usages[year][month] = amount

// 읽기 예
function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month]
    const earlier = customerData[customerID].usages[laterYear - 1][month]
    return { laterAmount: later, change: later - earlier }
}

// 변경 후
function getRawDataOfCustomers() {
    return customerData
}
function setRawDataOfCustomers(arg) {
    customerData = arg
}
// 쓰기 예
getRawDataOfCustomers()[customerID].usages[year][month] = amount

// 읽기 예
function compareUsage(customerID, laterYear, month) {
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month]
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][
        month
    ]
    return { laterAmount: later, change: later - earlier }
}
