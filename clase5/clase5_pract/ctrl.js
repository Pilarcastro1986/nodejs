const Books = require('./model')
// .get('/v1/alumnos', async (req, res, next) => {
//     try {
//         const alumnos = await req.db.Alumno.find()
//         res.send(alumnos)
//     } catch (error) {
//         next(error)
//     }
// })


async function getBooks (req, res, next){
    try{
        console.log(Object.keys('sss' , req.db[0]))
        const books = await Books.find()
        res.send(books)
    }
    catch (error){
        next(error)
    }
}
    // Books.find({}, (err,books) =>{
    //    if(err) return res.status(500).send({mensaje : 'error al buscar el producto'})
    //    if(!books) return res.status(404).send({mensaje: 'el producto no existe'})
    //    res.send(200, ({books}))
    //    })
    // }
    

function postBooks(req, res) {
    console.log(req.body);
    console.log('id:' , req.query)
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
    // let id = req.params.id
    // console.log( 'idbook' ,id)

    //     books.findById(id, (err, books) => {
    //         if(err) return res.status(500).send({ mensaje : 'no se puedo eliminar producto'})
    //         books.remove(err => {
    //         if(err) return res.status(500).send({ mensaje : 'no se puedo eliminar producto'})
    //         res.status(200).send({mensaje : 'producto eliminado'})
    //     })
    // })
}

module.exports = {getBooks , postBooks, deleteBook}