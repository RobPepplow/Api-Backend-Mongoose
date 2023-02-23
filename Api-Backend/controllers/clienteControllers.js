const { Cliente: ClienteModel } = require('../models/Cliente')


const clienteController = {

    create: async(req, res) => {

        try {
            const cliente = {
                nome: req.body.nome,                
                fone: req.body.fone,
                data_nascimento: req.body.data_nascimento,
                renda: req.body.renda,
                imovel: req.body.imovel,
                status: req.body.status,
            }

            const response = await ClienteModel.create(cliente)

            res.status(201).json({response, msg: 'Cliente Criado Com Sucesso!'})
        }
        catch (err) {
            console.log(err)
        }

    },

    //-------------------------------

    getAll: async (req, res) => {
        try {
            const clientes = await ClienteModel.find()
            res.json(clientes)

        } catch (error) {
            console.log(error)
        }
    },

    //-------------------------------

    get: async (req, res) => {
        try {
            const id = req.params.id
            const cliente = await ClienteModel.findById(id)

            if(!cliente){
                res.status(404).json({msg: "Cliente não encontrado"})
                return
            }

            res.status(200).json(cliente)

        } catch (error) {
           console.log(error) 
        }
    },

    //-------------------------------

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const cliente = await ClienteModel.findById(id)

            if(!cliente){
                res.status(404).json({msg: "Cliente não encontrado"})
                return
            }

            const deleteCliente = await ClienteModel.findByIdAndDelete(id)
            res.status(200).json({deleteCliente, msg:" Cliente Excluido com Sucesso!"})

        } catch (error) {
           console.log(error) 
        }
    },


    //-------------------------------

    update: async (req, res) => {
            const id = req.params.id

            const cliente = {
                nome: req.body.nome,                
                fone: req.body.fone,
                data_nascimento: req.body.data_nascimento,
                renda: req.body.renda,
                imovel: req.body.imovel,
                status: req.body.status,
            }   

            const updateCliente = await ClienteModel.findByIdAndUpdate(id, cliente)

            if(!updateCliente){
                res.status(404).json({msg: "Cliente não encontrado"})
                return
            }

            res.status(200).json({cliente, msg:" Cliente Atualizado com Sucesso!"})

     
        
    },

}

module.exports = clienteController