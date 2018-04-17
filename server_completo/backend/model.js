
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phones = Schema({
    modelo : String,
    marca: String,
    price: Number
})

module.exports = mongoose.model('Phones', Phones) 