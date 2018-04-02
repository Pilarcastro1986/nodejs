const express = require('express');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const logger = require('../logger.js')

const apiRouter = require('./api/createApiRouter.js')() 

const app = express()
.use(expressWinston.logger({
	winstonInstance: logger,
	msg: '{{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms',
	meta: false
}))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use('/api', apiRouter)
.use(function(err, req, res, next) {
	console.log(error.message)
});

module.exports = app