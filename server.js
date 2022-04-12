//Configuração incial
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Gateways = require('./src/models/gateways')

//Forma de ler JSON
app.use(
    express.urlencoded({
        extended : true,
    }),
)

app.use(express.json())

//Rotas API
const gatewaysRoutes = require('./src/routes/gatewaysRoutes')
app.use('/Gateways', gatewaysRoutes)

//Rota inicial / endpoint
app.get('/', (req,res) => {
    //mostrar req
    res.json({message: "ola"})
})
//mongodb+srv://guilherme:guilherme@cluster0.30fhd.mongodb.net/ecomfort_prod?retryWrites=true&w=majority

//Entregar uma porta
const DB_USER = process.env.DB_USER
//Utilizamos encode para quando a senha obtiver caracteres especiais
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.30fhd.mongodb.net/ecomfort_prod?retryWrites=true&w=majority`
    ).then (() => {
        console.log("Conectado!")
        app.listen(5000)
    })
    .catch((err) => {
        console.log(err)
    })



