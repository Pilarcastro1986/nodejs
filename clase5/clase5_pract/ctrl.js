const Books = require('./model')



function getBooks(req, res){
    Books.find({}, (err,books) =>{
       if(err) return res.status(500).send({mensaje : 'error al buscar el producto'})
       if(!books) return res.status(404).send({mensaje: 'el producto no existe'})
       res.send(200, ({books}))
       })
    }
    

function postBooks(req, res) {
    console.log(req.body);

    let books = new Books()
    books.titulo = req.body.titulo
    books.autor = req.body.autor
    books.anio = req.body.anio


    books.save((err, bookStored) => {
        if (err) return res.status(500).send({ mensaje: 'NO SE PUEDE CONECTAR A LA BD' })
        return res.status(200).send({ mensaje: bookStored })
    })
}
 

function deleteBook(req, res){
    let booktst = req.params.id
    console.log( 'idbook' ,booktst)
}

module.exports = {getBooks , postBooks, deleteBook}