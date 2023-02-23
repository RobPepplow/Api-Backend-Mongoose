const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())
//Para o express entender Aquivos json
// app.use(express.urlencoded({extended: true}));
app.use(express.json())


const ip = require('ip').address()
const port = process.env.PORT

//Conection BD

const db = require('./db/conectionDB')
db()

// Routes

// const routes = require('./routes/router')
const router = require('./routes/router')
app.use('/api', router)
   
app.listen(port, () => {
    console.log(`Servidor On-Line na Porta http://${ip}:${port}`)
})


