

const mongoose = require('mongoose')

const { Schema } = mongoose

const imovelSchema = new Schema({
    //nome
    nome_Imovel:{
        type: String,
        required: true
    },
    //Descrição
    description:{
        type:String,
        required: true
    },
    //Preço
    endereco:{
        type:String,
        required: true
    },
    bairro:{
        type:String,
        required: true
    },
    cidade:{
        type:String,
        required: true
    },
    valor:{
        type:Number
    },
    //Imagen por Url
    materialApoio:{
        type:String,        
    }
}, {timestamps:true})

const Imovel = mongoose.model('Imovel', imovelSchema)

module.exports = {
    Imovel,
    imovelSchema
}




