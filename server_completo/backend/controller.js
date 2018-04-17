const Phones = require('./model');

async function getPhones(req,res,next){
    try{
        const tel = await Phones.find()
        res.send(tel)
    }
    catch (error){
        console.log(error)
    }
}

async function getPhone(req,res,next){
    try {
        const phoneId = await Phones.findById(req.params.phoneId)
        console.log(phoneId);
        res.send(phoneId);
    }
    catch (error) {
        console.log(error)
    }
}


async function postPhone(req,res,next){
    try{
        const telefono = new Phones();
        telefono.modelo = req.body.modelo,
        telefono.marca = req.body.marca,
        telefono.precio = req.body.precio

        await telefono.save()
        res.status(201).send(telefono)
    }
    catch (error){
        console.log(error)
    }
} 


async function deletePhone(req,res,next){
    try {
        const phoneId = await Phones.findById(req.params.phoneId)
        phoneId.remove(phoneId)
        return res.status(200).send('producto eliminado')
    }
    catch (error) {
        next(error)
    }
}


module.exports = {
    getPhones,
    getPhone,
    postPhone,
    deletePhone
}