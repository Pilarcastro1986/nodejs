const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Peliculas = Schema({
    titulo : String,
    anio: String,
    director: String,
    genero : String
})

module.exports = mongoose.model('Peliculas', Peliculas) 