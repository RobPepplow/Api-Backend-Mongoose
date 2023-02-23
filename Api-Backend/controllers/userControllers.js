const { User: UserModel } = require('../models/User')


const userController = {

    create: async(req, res) => {

        try {
            const user = {
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                data_nascimento: req.body.data_nascimento,
            }

            const response = await UserModel.create(user)

            res.status(201).json({response, msg: 'Usuário Criado Com Sucesso!'})
        }
        catch (err) {
            console.log(err)
        }

    },

    //-------------------------------

    getAll: async (req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)

        } catch (error) {
            console.log(error)
        }
    },

    //-------------------------------

    get: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não encontrado"})
                return
            }

            res.status(200).json(user)

        } catch (error) {
           console.log(error) 
        }
    },

    //-------------------------------

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não encontrado"})
                return
            }

            const deleteUser = await UserModel.findByIdAndDelete(id)
            res.status(200).json({deleteUser, msg:" Usuário Excluido com Sucesso!"})

        } catch (error) {
           console.log(error) 
        }
    },


    //-------------------------------

    update: async (req, res) => {
            const id = req.params.id

            const user = {
                nome: req.body.nome,
                email: req.body.email,
                fone: req.body.fone,
                data_nascimento: req.body.data_nascimento,
            }                   

            const updateUser = await UserModel.findByIdAndUpdate(id, user)

            if(!updateUser){
                res.status(404).json({msg: "Usuário não encontrado"})
                return
            }

            res.status(200).json({user, msg:" Usuário Atualizado com Sucesso!"})

     
        
    },

}

module.exports = userController