const router = require('express').Router()

//Service Router
const servicesRouter = require('./services')
router.use('/', servicesRouter)

//Parties Router
const partiesRouter = require('./parties')
router.use('/', partiesRouter)

//Users Router
const usersRouter = require('./users')
router.use('/', usersRouter)

const clientesRouter = require('./clientes')
router.use('/', clientesRouter)

const imoveisRouter = require('./imoveis')
router.use('/', imoveisRouter)

const statusContatosRouter = require('./statusContatos')
router.use('/', statusContatosRouter)

module.exports = router