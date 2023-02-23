const { User: StatusContatoModel } = require('../models/StatusContato')


const statusContatoController = {

    create: async(req, res) => {

        try {
            const status = {
                nome: req.body.nome,
                description: req.body.description,                
            }

            const response = await StatusContatoModel.create(status)

            res.status(201).json({response, msg: 'Status do Contato Criado Com Sucesso!'})
        }
        catch (err) {
            console.log(err)
        }

    },

    //-------------------------------

    getAll: async (req, res) => {
        try {
            const status = await StatusContatoModel.find()
            res.json(status)

        } catch (error) {
            console.log(error)
        }
    },

    //-------------------------------

    get: async (req, res) => {
        try {
            const id = req.params.id
            const status = await StatusContatoModel.findById(id)

            if(!status){
                res.status(404).json({msg: "Status do Contato não encontrado"})
                return
            }

            res.status(200).json(status)

        } catch (error) {
           console.log(error) 
        }
    },

    //-------------------------------

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const status = await StatusContatoModel.findById(id)

            if(!status){
                res.status(404).json({msg: "Status do Contato não encontrado"})
                return
            }

            const deleteStatus = await StatusContatoModel.findByIdAndDelete(id)
            res.status(200).json({deleteStatus, msg:" Status do Contato Excluido com Sucesso!"})

        } catch (error) {
           console.log(error) 
        }
    },


    //-------------------------------

    update: async (req, res) => {
            const id = req.params.id

            const status = {
                nome: req.body.nome,
                description: req.body.description,                
            }                

            const updateStatus = await StatusContatoModel.findByIdAndUpdate(id, status)

            if(!updateStatus){
                res.status(404).json({msg: "Status do Contato não encontrado"})
                return
            }

            res.status(200).json({status, msg:" Status do Contato Atualizado com Sucesso!"})

     
        
    },

}

module.exports = statusContatoController