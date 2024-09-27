const { Router } = require('express')
const EstadoCivilController = require('../controllers/estadoCivilController')

const router = Router()

router
    .post('/estadoCivil', EstadoCivilController.cadastrarEstadoCivil)
    .get('/estadoCivil', EstadoCivilController.buscarTodosEstadoCivils)
    .get('/estadoCivil/id/:id', EstadoCivilController.buscarEstadoCivilPorId)
    .delete('/estadoCivil/id/:id', EstadoCivilController.deletarEstadoCivilPorId)
    .put('/estadoCivil/id/:id', EstadoCivilController.editarEstadoCivil)

module.exports = router