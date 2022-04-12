const router = require('express').Router()

const Gateways = require('../models/gateways')

//CREATE
router.post('/', async (req, res) => {
    
    //req.body

    //{name: "Gateway PixelTi", serialNumber: "12231", registeredUser, IPV4 }
    const {name, serialNumber, registeredUsers, ipV4} = req.body()

    if(!name) {
        res.status(422).json({message: "O nome é obrigatorio!"})
        return
    }

    const gateways = {
        name,
        serialNumber,
        registeredUsers,
        ipV4
    }

    try {
        
        await Gateways.create(gateways)
        res.status(201).json({message: "Gateway cadastrado com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
        
    }
})

//READ 
router.get('/', async(req,res) => {
    try {
        const dados = await Gateways.find()
        res.status(200).json(dados)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//READ ESPECIFICO - BUSCANDO POR SERIAL NUMBER
router.get('/:serialNumber', async(req,res) => {
    //extrair o dado da requisição pela URL = req.params
    const serialNumberReq = req.params.serialNumber

    if(!serialNumberReq) {
        res.status(422).json({message: "O Serial Number não foi encontrado!"})
        return
    }

    try {
        const dados = await Gateways.findOne({serialNumber: serialNumberReq})
        res.status(200).json(dados)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//UPDATE pelo registeredUsers - Atualização por PUT, PATCH
router.patch('/:registeredUsers', async(req,res) => {
    //extrair o dado da requisição pela URL = req.params
    const registeredUsersReq = req.params.registeredUsers

    const gateways = {        
        serialNumber,
        registeredUsers,
        ipV4
    }

    if(!registeredUsersReq) {
        res.status(422).json({message: "O registeredUsers não foi encontrado!"})
        return
    }

    try {
        const updatedGateway = await Gateways.updateOne({registeredUsers: registeredUsersReq}, gateways)
        res.status(200).json(updatedGateway)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//DELETE pelo SerialNumber - Atualização por PUT, PATCH
router.patch('/:registeredUsers', async(req,res) => {
   //extrair o dado da requisição pela URL = req.params
   const serialNumberReq = req.params.serialNumber

   const gateways = {        
    serialNumber,
    registeredUsers,
    ipV4
}

   if(!serialNumberReq) {
       res.status(422).json({message: "O Serial Number não foi encontrado!"})
       return
   }

   try {
       const dados = await Gateways.deleteOne({serialNumber: serialNumberReq}, gateways)
       res.status(200).json({message: "O serial number foi removido com sucesso"})
       
   } catch (error) {
       res.status(500).json({error: error})
   }
})

module.exports = router