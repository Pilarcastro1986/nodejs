const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = Schema({
    titulo : String,
    autor : String,
    anio : Number
});

module.exports = mongoose.model('Books', BooksSchema) 