const { Imovel: ImovelModel } = require('../models/Imovel')


const imovelController = {

    create: async(req, res) => {

        try {
            const imovel = {
                nome_Imovel: req.body.nome_Imovel,
                description: req.body.description,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                valor: req.body.valor,                
                materialApoio: req.body.email,
                               
            }

            const response = await ImovelModel.create(imovel)

            res.status(201).json({response, msg: 'Imovél Criado Com Sucesso!'})
        }
        catch (err) {
            console.log(err)
        }

    },

    //-------------------------------

    getAll: async (req, res) => {
        try {
            const imovels = await ImovelModel.find()
            res.json(imovels)

        } catch (error) {
            console.log(error)
        }
    },

    //-------------------------------

    get: async (req, res) => {
        try {
            const id = req.params.id
            const imovel = await ImovelModel.findById(id)

            if(!imovel){
                res.status(404).json({msg: "Imovél não encontrado"})
                return
            }

            res.status(200).json(imovel)

        } catch (error) {
           console.log(error) 
        }
    },

    //-------------------------------

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const imovel = await ImovelModel.findById(id)

            if(!imovel){
                res.status(404).json({msg: "Imovél não encontrado"})
                return
            }

            const deleteImovel = await ImovelModel.findByIdAndDelete(id)
            res.status(200).json({deleteImovel, msg:" Imovél Excluido com Sucesso!"})

        } catch (error) {
           console.log(error) 
        }
    },


    //-------------------------------

    update: async (req, res) => {
            const id = req.params.id

            const imovel = {
                nome_Imovel: req.body.nome_Imovel,
                description: req.body.description,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                valor: req.body.valor,                
                materialApoio: req.body.email,
            }                   

            const updateImovel = await ImovelModel.findByIdAndUpdate(id, imovel)

            if(!updateImovel){
                res.status(404).json({msg: "Imovél não encontrado"})
                return
            }

            res.status(200).json({imovel, msg:" Imovél Atualizado com Sucesso!"})

     
        
    },

}

module.exports = imovelController