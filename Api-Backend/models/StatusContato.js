// aqui estamos criando a modulação do sistema aqui no caso 
//**serviços**

const mongoose = require('mongoose')

const { Schema } = mongoose

const statusContatoSchema = new Schema({
    //nome
    nome:{
        type: String,
        required: true
    },
    //Descrição
    description:{
        type: String,
        required: true
    }
    
}, {timestamps:true})


const StatusContato = mongoose.model('StatusContato', statusContatoSchema)


module.exports = {
    StatusContato,
    statusContatoSchema
}




