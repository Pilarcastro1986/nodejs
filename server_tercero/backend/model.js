const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Juegos = Schema({
    nombre : String,
    marca: String,
    edad: String
})

module.exports = mongoose.model('Juegos', Juegos)