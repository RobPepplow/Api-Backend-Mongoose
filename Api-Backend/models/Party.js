const mongoose =require('mongoose')

const { Schema } = mongoose
//vamos importar o "serviceSchema" para usar seus dados
const { serviceSchema } = require('./Service')

const partySchema= new Schema({
    //titulo
    title:{
        type:String,
        required: true
    },
    //Autor
    author:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    //Orçamento
    budget:{
        type:Number,
        required: true
    },
    //imagem que vai ser por URL
    // image:{
    //     type:String,
    //     // required: true
    // },
    // que aqui usaremos o do modulo service
    services:{
        type:[serviceSchema],
    },

},{timestamps: true})

const Party = mongoose.model('Party', partySchema)

module.exports = { Party }

