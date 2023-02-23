const router = require('express').Router()

const imovelController = require('../controllers/imovelControllers')

router.route('/imoveis').post((req,res) => imovelController.create(req, res))
router.route('/imoveis').get((req,res) => imovelController.getAll(req, res))
router.route('/imoveis/:id').get((req,res) => imovelController.get(req, res))
router.route('/imoveis/:id').delete((req,res) => imovelController.delete(req, res))
router.route('/imoveis/:id').put((req,res) => imovelController.update(req, res))

module.exports = router