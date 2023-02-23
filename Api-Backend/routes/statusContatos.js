const router = require('express').Router()

const statusContatoController = require('../controllers/statusContatoControllers')

router.route('/statusContatos').post((req,res) => statusContatoController.create(req, res))
router.route('/statusContatos').get((req,res) => statusContatoController.getAll(req, res))
router.route('/statusContatos/:id').get((req,res) => statusContatoController.get(req, res))
router.route('/statusContatos/:id').delete((req,res) => statusContatoController.delete(req, res))
router.route('/statusContatos/:id').put((req,res) => statusContatoController.update(req, res))

module.exports = router