const mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
  titulo: String,
  anio: Number,
  autor: String
});

module.exports = ('Products', ProductSchema);
