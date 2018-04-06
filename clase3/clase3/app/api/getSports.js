const express = require('express');

module.exports = express
.Router({mergeParams: true})
.get('/v1/sports', (req, res, next) => {

    res.json({
		nombre: "carlos",
	})

});