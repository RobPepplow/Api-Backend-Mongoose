// aqui estamos criando a modulação do sistema aqui no caso 
//**serviços**

const mongoose = require('mongoose')

const { Schema } = mongoose

const serviceSchema = new Schema({
    //nome
    name:{
        type: String,
        required: true
    },
    //Descrição
    description:{
        type:String,
        required: true
    },
    //Preço
    price:{
        type:Number,
        required: true
    },
    //Imagen por Url
    image:{
        type:String,
        required: false
    }
}, {timestamps:true})

//{timestamps:true} esta Propriedade coloca a data de criação de data de alteração

//utilizados para ordenação desses dados caso precise para uma pesquisa mais avançada


/* Agora vamos criar as tabelas no banco de dados
**NO caso Aqui MongoDBAtlas
*/
const Service = mongoose.model('Service', serviceSchema)
//aqui pode deixar no singular que no banco ele deixa no plural ex:services
//Obs: Deixe o Nome da Variavel Maiscula ex: Service e dentro do model tbm "Service"

module.exports = {
    Service,
    serviceSchema
}

//aqui estamos exportando eles
/* veja que aqui estamos exportando o "serviceSchema" porque no
modulo party (festa) iremos utilizar seus dados 
*/


