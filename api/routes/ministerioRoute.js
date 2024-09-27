const { Router } = require('express')
const MinisterioController = require('../controllers/MinisterioController')

const router = Router()

router
    .post('/ministerios', MinisterioController.cadastrarMinisterio)
    .get('/ministerios', MinisterioController.buscarTodosMinisterios)
    .get('/ministerios/id/:id', MinisterioController.buscarMinisterioPorId)
    .delete('/ministerios/id/:id', MinisterioController.deletarMinisterioPorId)
    .put('/ministerios/id/:id', MinisterioController.editarMinisterio)

module.exports = router