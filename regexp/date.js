const log = console.log
const replaceDate = '20200116'.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
log(replaceDate) // 2020-01-16
