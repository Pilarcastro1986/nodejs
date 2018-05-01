
const Juegos = require('./model')

function getJuegos(req, res, next){
    Juegos.find()
    .then(juegos => {
        res.send(juegos)
    })
    .catch(error => {
        console.log('Se produjo un error')
    })
}


function postJuegos (req, res, next) {

    const juegueteNuevo = new Juegos()
    juegueteNuevo.nombre = req.body.nombre
    juegueteNuevo.marca = req.body.marca
    juegueteNuevo.edad = req.body.edad

    juegueteNuevo.save()
    res.status(200).send(juegueteNuevo)
}

function getJuego(req, res, next){
    const id = Juegos.findById(req.params.id)
    .then(id => {
        res.send(id)
    })
    .catch(error => {
        console.log('se produjo un error')
    })
}

function deleteJuego(req, res) {
    const id = Juegos.findById(req.params.id)
    .then(id => {
        id.remove(id)
        console.log('Producto Eliminado')
    })
    .catch(error => {
        console.log('error al eliminar')
    })
}


module.exports = {getJuegos, postJuegos, getJuego, deleteJuego}