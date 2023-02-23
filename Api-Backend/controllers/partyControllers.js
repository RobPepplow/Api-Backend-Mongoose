const { Party: PartyModel } = require('../models/Party')

const checkBudgetAvailable = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)
    
    console.log(`Deu o Total da festa R$${priceSum} e vc tem R$${budget} de limite`)
    
    if(priceSum > budget){
        return false        
    } 
    
    return true
}

const partyController = {

    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                // image: req.body.image,
                services: req.body.services,
            }

            if (party.services && !checkBudgetAvailable(party.budget, party.services)){
                res.status(406).json({msg: 'O Seu Orçamento e Insuficiente'})
                return
            }

            const response = await PartyModel.create(party)

            res.status(201).json({response, msg: 'Festa Criada com Sucesso!!'})

        } catch (error) {
            console.log(error)
        }
    },

    //GETALL
    getAll: async (req,res) => {
        try {
            const parties = await PartyModel.find()
            res.json(parties)

        } catch (error) {
            console.log(error)
        }
    },

    //getid 

    get: async (req, res) => {
        try {
            const id = req.params.id
            const party = await PartyModel.findById(id)

            if (!party) {
                res.status(404).json({ msg: 'Festa não Encontrada'})
                return
            }
            
            res.status(200).json(party)

        } catch (error) {
            console.log(error)
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id
            const party = await PartyModel.findById(id)

            if(!party) {
                res.status(404).json({ msg: 'Festa não Encontrada'})
                return
            }

            const deleteParty = await PartyModel.findByIdAndDelete(id)
            res.status(200).json({ deleteParty, msg: 'Festa deletada com Sucesso!'})

        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {

        const id = req.params.id  

        const party = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            budget: req.body.budget,
            // image: req.body.image,
            services: req.body.services,
        }

        const updateParty =  await PartyModel.findByIdAndUpdate(id, party)

        if(!updateParty){
            res.status(404).json({ msg:'Festa não Encontrada'})
            return
        }        

        if (party.services && !checkBudgetAvailable(party.budget, party.services)){
            res.status(406).json({msg: 'O Seu Orçamento e Insuficiente'})
            return
        }
        
        res.status(200).json({party, msg:'Festa Alterada com Sucesso!'})

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = partyController