const mongoose =require('mongoose')

const { Schema } = mongoose



const userSchema= new Schema({
    //titulo
    nome:{
        type:String,
        required: true
    },
    //Autor
    email:{
        type:String,
        required: true
    },
    fone:{
        type:Number,
        required: true
    },
    //Orçamento
    data_nascimento:{
        type:Date,
        required: true
    },

},{timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = { User }

