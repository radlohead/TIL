const log = console.log
const price = '12345678'
const comma = s => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
log(comma(price)) // 12,345,678
