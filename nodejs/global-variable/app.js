const express = require('express')
const app = express()

global.state = {
    isGlobal: true
}
const page = require('./page')

app.listen('3000', () => {
    console.log('connect server')
})
