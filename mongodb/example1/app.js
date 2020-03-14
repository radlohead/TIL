const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = mongoose.connection
const port = process.env.port || 4000
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
