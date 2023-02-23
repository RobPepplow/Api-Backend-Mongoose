const mongoose =require('mongoose')

const { Schema } = mongoose

const { statusContatoSchema} = require ('./StatusContato')
const { imovelSchema} = require ('./Imovel')

const clienteSchema= new Schema({
    //titulo
    nome:{
        type:String,
        required: true
    },
    //Autor
    fone:{
        type:Number,
        required: true
    },
    //Orçamento
    data_nascimento:{
        type:String,        
    },
    renda:{
        type:Number,        
    },    
    imovel:{
        type:[imovelSchema]
    },
    status:{
        type:[statusContatoSchema]
    },
        


},{timestamps: true})

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = { Cliente }

