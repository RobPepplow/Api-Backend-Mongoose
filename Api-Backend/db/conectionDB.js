const mongoose= require('mongoose')

require('dotenv').config()

const main = async () => {
  
    try{
        mongoose.set('strictQuery', true)
       
        await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@projetofestas.gxyssph.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Banco de dados MongoBDAtlas Conectado com Sucesso!")
    }
        
    catch(err) {
        console.log(`Erro: ${err}`)
    }


}

module.exports = main