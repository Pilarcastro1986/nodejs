const Books = require('./model')

    
async function getBooks (req, res, next){
        try{
            const books = await Books.find()
            res.send(books)
            console.log(books)
        }
        catch (error){
            console.log(error);
        }
    }
    

async function getBook (req, res, next){
    console.log('req', req.params)
    try{
        const id = await Books.findById(req.params.id)
        res.send(id)
        console.log('error', id);
    }
    catch (error){
        console.log(error);
    }
}

async function deleteBook (req, res, next){
    console.log('req', req.params)
    try{
        const id = await Books.findById(req.params.id)
        id.remove(id)
        return res.status(200).send('producto eliminado')
    }
    catch (error){
        console.log(error);
    }
}

    async function postBooks (req, res, next){
         try {
            const nuevo =  new Books();
            nuevo.titulo = req.body.titulo
            nuevo.autor = req.body.autor
            nuevo.anio = req.body.anio

            await nuevo.save()
            res.status(201).send(nuevo)

         }   
        catch(error) {
            next(error)
        }
    }


module.exports = {
    getBooks,
    getBook,
    deleteBook,
    postBooks
}

