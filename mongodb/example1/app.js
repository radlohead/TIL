const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = mongoose.connection
const port = process.env.port || 4000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE')
    res.header('Access-Control-Request-Method', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Secrete_Token'
    )
    next()
})

db.on('error', console.error)
db.once('open', function() {
    console.log('connected mongod server')
})
mongoose.connect('mongodb://localhost/test')

const bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now }
})

const Book = mongoose.model('book', bookSchema)

app.get('/api/books', (req, res, next) => {
    Book.find((err, books) => {
        console.log('book: ', books)
        res.json(books)
    })
})

app.post('/api/books', function(req, res) {
    var book = new Book()
    book.title = 'title test'
    book.author = 'author test'
    book.published_date = new Date()

    book.save(function(err) {
        if (err) {
            console.error(err)
            res.json({ result: 0 })
            return
        }
        res.json({ result: 1 })
    })
})

app.listen(port, () => {
    console.log('connected server success')
})
