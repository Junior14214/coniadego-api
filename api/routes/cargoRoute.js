const { Router } = require('express')
const CargoController = require('../controllers/cargoController')

const router = Router()

router
    .post('/cargo', CargoController.cadastrarCargo)
    .get('/cargo', CargoController.buscarTodosCargos)
    .get('/cargo/id/:id', CargoController.buscarCargoPorId)
    .delete('/cargo/id/:id', CargoController.deletarCargoPorId)
    .put('/cargo/id/:id', CargoController.editarCargo)

module.exports = router