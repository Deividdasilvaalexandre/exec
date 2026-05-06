const Carro = require('../models/carro')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log('dados do front = ',valores)

    try{
        await Carro.create(valores)
        res.status(201).json({message: "Carro cadastrado com sucesso!"})
    }catch(err){
        res.status(500).json({message: "Não foi possível cadastrar o carro"})
        console.error('Não foi possível cadastrar o carro', err)
    }

}

const listar = async (req,res)=>{
    try{
        const carros = await Carro.findAll()
        res.status(201).json(carros)
    }catch(err){
        res.status(500).json({message: "Não foi possível listar o carro"})
        console.error('Não foi possível listar o carro', err)
    }
}


module.exports = { cadastrar, listar }