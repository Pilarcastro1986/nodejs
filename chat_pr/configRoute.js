const express = require('express');
const bodyParser = require('body-parser');

const configRoute = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())
.use(express.static('./public'))

module.exports = configRoute;